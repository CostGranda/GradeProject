import React, { useEffect, useState, useMemo } from "react";
import SelectColumnFilter from '../components/Table/components/SelectColumnFilter';
import SliderColumnFilter from '../components/Table/components/SliderColumnFilter';
import Table from "../components/Table";

import './Empty.scss'

function EmptyPage() {
  const [data, setData] = useState();

  const columnsTable = useMemo(
    () => [
      {
        Header: 'ID Number',
        accessor: 'cedula',
        filter: 'fuzzyText',
      },
      {
        Header: 'Names',
        accessor: 'nombres',
        filter: 'fuzzyText',
      },
      {
        Header: 'Surnames',
        accessor: 'apellidos',
        filter: 'fuzzyText',
      },
      {
        Header: 'City',
        accessor: 'ciudad',
        filter: 'fuzzyText',
      },
      {
        Header: 'Specialty',
        accessor: 'especialidades',
        Filter: SelectColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Availability',
        accessor: 'disponibilidad',
        filter: 'fuzzyText',
      },
      {
        Header: 'Calification',
        accessor: 'calificacion',
        Filter: SliderColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Phones',
        accessor: 'telefonos',
        filter: 'fuzzyText',
      },
      {
        Header: 'Email',
        accessor: 'email',
        filter: 'fuzzyText',
      },
      {
        Header: 'Skype',
        accessor: 'skype',
        filter: 'fuzzyText',
      },
      {
        Header: 'Origin',
        accessor: 'origen',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'State',
        accessor: 'state',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'CV',
        accessor: 'cv',
      },
      {
        Header: 'Comments',
        accessor: 'comentarios',
      },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://happy-test2.herokuapp.com/api/applicants",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3NjA2NTAwOSwiZXhwIjoxNTc3Mjc0NjA5fQ.HI24Ypq1mvX4-sV3T0o5_1ybgcAypcCIvopAkHXQvO8"
          },
          mode: "cors"
        }
      );
      let data = await response.json();
      const newData = data.map( item => ({...item, disponibilidad:  item.disponibilidad ? new Date(item.disponibilidad).toDateString() : undefined }))
      setData(newData);
    };

    fetchData();
  }, []);

  return (
    <>
      {data && (
        <div className='table-container'>
          <Table  columns={columnsTable} data={data} createRoute="/createDataBase" />
        </div>
      )}
    </>
  );
}

export default EmptyPage;
