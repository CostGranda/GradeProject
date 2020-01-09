import React, { useEffect, useState, useMemo } from "react";
import SelectColumnFilter from "../components/Table/components/SelectColumnFilter";
import SliderColumnFilter from "../components/Table/components/SliderColumnFilter";
import Table from "../components/Table";
import localServices from "../services/LocalStorageService";
import moment from "moment";

import "./Empty.scss";

function EmptyPage() {
  const [data, setData] = useState();
  const [needReload, setReload] = useState(false);

  const columnsTable = useMemo(
    () => [
      {
        Header: "ID Number",
        accessor: "cedula",
        filter: "fuzzyText"
      },
      {
        Header: "Names",
        accessor: "nombres",
        filter: "fuzzyText"
      },
      {
        Header: "Surnames",
        accessor: "apellidos",
        filter: "fuzzyText"
      },
      {
        Header: "City",
        accessor: "ciudad",
        filter: "fuzzyText"
      },
      {
        Header: "Specialty",
        accessor: "especialidades",
        Filter: SelectColumnFilter,
        filter: "equals"
      },
      {
        Header: "Availability",
        accessor: "disponibilidad",
        filter: "fuzzyText"
      },
      {
        Header: "Calification",
        accessor: "calificacion",
        Filter: SliderColumnFilter,
        filter: "equals"
      },
      {
        Header: "Phones",
        accessor: "telefonos",
        filter: "fuzzyText"
      },
      {
        Header: "Email",
        accessor: "email",
        filter: "fuzzyText"
      },
      {
        Header: "Origin",
        accessor: "origen",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "State",
        accessor: "state",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "CV",
        accessor: "cv"
      },
      {
        Header: "Comments",
        accessor: "comentarios"
      }
    ],
    []
  );

  const fetchData = async () => {
    const token = localServices.getCurrentAccountId("token");
    const response = await fetch(
      "https://happy-test2.herokuapp.com/api/applicants",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.token}`
        },
        mode: "cors"
      }
    );
    let data = await response.json();
    const newData = data.map(item => ({
      ...item,
      disponibilidad: item.disponibilidad
        ? item.disponibilidad.split("T", 1)
        : undefined
    }));
    setReload(false);
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (needReload) {
      fetchData();
    }
  }, [needReload]);

  return (
    <>
      {" "}
      {data && (
        <div className="table-container">
          <Table
            columns={columnsTable}
            setReload={setReload}
            data={data}
            createRoute="/createDataBase"
            updateRoute="/UpdateAplicant"
          />
        </div>
      )}{" "}
    </>
  );
}

export default EmptyPage;
