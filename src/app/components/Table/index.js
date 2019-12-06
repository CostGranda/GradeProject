import React from 'react';
import { useTable, useFilters } from 'react-table'

import fuzzyTextFilterFn from './components/Fuzzy';
import DefaultColumnFilter from './components/DefaultColumnFilter';

import './table.scss'

function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,

      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters // useFilters!
  )

  return (

      <table className="table table-striped" {...getTableProps()}>
        <thead className="header-table">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th  scope="col" {...column.getHeaderProps()}>
                  {column.render('Header')}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td scope="row" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>

  )
}

export default Table;