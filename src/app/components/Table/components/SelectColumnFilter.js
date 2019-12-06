import React from 'react';


function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    const preOptions = []
    preFilteredRows.forEach(row => {
      preOptions.push(row.values[id])
      options.add(Array.isArray(row.values[id])  ? row.values[id][0]  : row.values[id])
    })
    // console.log("daniel", preOptions.flat(2))
    // return [...new Set(preOptions.flat(2))]

    // const retunito = [...new Set(...options.values())]

    // console.log("retunito", retunito)
    // return retunito
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

export default SelectColumnFilter;