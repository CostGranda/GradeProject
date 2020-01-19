import React from "react";
import { BASE_ENDPOINT } from "../../../constanst";
import { useTable, useFilters } from "react-table";
import { NavLink } from "react-router-dom";
import fuzzyTextFilterFn from "./components/Fuzzy";
import DefaultColumnFilter from "./components/DefaultColumnFilter";
import "./table.scss";
import localServices from "../../services/LocalStorageService";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function Table({ columns, data, createRoute, updateRoute, setReload }) {
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,

      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const modalShow = row => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteItem(row)
        },
        {
          label: "No"
        }
      ]
    });
  };

  const modalInfo = (title, message) => {
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: "Closed"
        }
      ]
    });
  };

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );

  const deleteItem = item => {
    const token = localServices.getCurrentAccountId("token");
    const fetchDelete = async () => {
      const id = item.original.identification
        ? item.original.identification
        : item.original.cedula;

      const URL = item.original.identification
        ? `${BASE_ENDPOINT}alerts/`
        : `${BASE_ENDPOINT}applicants/`;
      const response = await fetch(`${URL}${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token.token}`
        },
        mode: "cors"
      });
      let data = await response.json();
      if (response.status === 200) {
        const title = "Deleted";
        const message = "It's successfully removed";
        modalInfo(title, message);
        setReload(true);
      } else if (response.status === 202) {
        modalInfo(
          "Error",
          "The record has an associated alarm, it cannot be deleted"
        );
      } else {
        modalInfo(
          "Error",
          "Failed to perform deletion, try again"
        );
      }
    };
    fetchDelete();
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes
    },
    useFilters // useFilters!
  );

  const role = localServices.getCurrentAccountId("role");

  return (
    <>
      <table className="table table-striped" {...getTableProps()}>
        <thead className="header-table">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th scope="col" {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
              {role.role === "Admin" && <th>Edit</th>}
              {role.role === "Admin" && <th>Delete</th>}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td scope="row" {...cell.getCellProps()}>
                      {cell.column.id === "cv" ? (
                        <a
                          href={cell.value}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Hoja de vida
                        </a>
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}

                {role.role === "Admin" && (
                  <td>
                    <NavLink to={`${updateRoute}/${row.cells[0].value}`}>
                      <button type="button" class="btn btn-warning">
                        <svg
                          class="bi bi-pencil"
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            d="M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </NavLink>
                  </td>
                )}

                {role.role === "Admin" && (
                  <td>
                    <button
                      onClick={() => modalShow(row)}
                      type="button"
                      class="btn-danger"
                    >
                      <svg
                        class="bi bi-x-circle-fill"
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.354 6.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container">
        {role.role === "Admin" && (
          <NavLink className="create-button" to={createRoute}>
            +
          </NavLink>
        )}
      </div>
    </>
  );
}

export default Table;
