import React, { useEffect, useState, useMemo } from "react";
import { useTable, useFilters } from "react-table";
import matchSorter from 'match-sorter'

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  )
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <input
        value={filterValue[0] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
        }}
        placeholder={`Min (${min})`}
        style={{
          width: '70px',
          marginRight: '0.5rem',
        }}
      />
      to
      <input
        value={filterValue[1] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
        }}
        placeholder={`Max (${max})`}
        style={{
          width: '70px',
          marginLeft: '0.5rem',
        }}
      />
    </div>
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val


// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'

function EmptyPage() {
  const [data, setData] = useState();
  const headers = useMemo(
    () => [
      // "Cédula",
      // "Nombres",
      // "Apellidos",
      // "Ciudad",
      // "Especialidad",
      // "Disponibilidad",
      // "Calificación",
      // "Teléfonos",
      // "Email",
      // "Skype",
      // "Origen",
      // "State",
      // "CV",
      // "Comentarios"
      {
        Header: 'ID Number',
        accessor: 'id_number',
        filter: 'fuzzyText',
      },
      {
        Header: 'Names',
        accessor: 'names',
        filter: 'fuzzyText',
      },
      {
        Header: 'Surnames',
        accessor: 'surnames',
        filter: 'fuzzyText',
      },
      {
        Header: 'City',
        accessor: 'city',
        filter: 'fuzzyText',
      },
      {
        Header: 'Specialty',
        accessor: 'specialty',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Availability',
        accessor: 'availability',
        filter: 'fuzzyText',
      },
      {
        Header: 'Calification',
        accessor: 'calification',
        Filter: SliderColumnFilter,
        filter: 'equals',
      },
      {
        Header: 'Phones',
        accessor: 'phones',
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
        accessor: 'origin',
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
        accessor: 'comments',
      },
    ],
    []
  );

  // const delete = item => {};
  // const update = item => {};

  // const imprimir = item => {
  //   console.log("item", item)

  //   const filtro = data.filter( item => item.telefonos.includes(123123123));
  //   console.log(filtro, "Filtro telefono")
  // }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://happy-test2.herokuapp.com/api/applicants",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3NTI4NjU2MiwiZXhwIjoxNTc2NDk2MTYyfQ.OJ8iiM_bovHAt0V8-yoBVKpTvwTEjqrw4Uxyzup7Mtg"
          },
          mode: "cors"
        }
      );

      let data = await response.json();
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {data && (
        <table className="table table-striped">
          <thead>
            <tr>
              {headers.map(headerGroup => (
                <th scope="col">{headerGroup.Header}
                  <div>
                    {headerGroup.canFilter ? headerGroup.render('Filter') : null}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.cedula}>
                <td>{item.cedula}</td>
                <td>{item.nombres}</td>
                <td>{item.apellidos}</td>
                <td>{item.ciudad}</td>
                <td>{item.especialidades}</td>
                <td>{item.disponibilidad}</td>
                <td>{item.calificacion}</td>
                <td>
                  {item.telefonos.map(telefono => (
                    <p key={telefono}>{telefono}</p>
                  ))}
                </td>
                <td>{item.email}</td>
                <td>{item.skype}</td>
                <td>{item.origen}</td>
                <td>{item.state}</td>
                <td>{item.cv}</td>
                <td>{item.comentarios}</td>
                {/* <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => delet(item)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => update(item)}
                  >
                    Actualizar
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default EmptyPage;
