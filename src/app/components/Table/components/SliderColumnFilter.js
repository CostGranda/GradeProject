import React from 'react';

function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length > 0 ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length > 0 ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {

      min = row.values[id] ? Math.min(row.values[id], min) : 0
      max = row.values[id] ? Math.max(row.values[id], max) : 0
    })

    return [min, max]
  }, [id, preFilteredRows])

  return (
    <>
      <input
        type="range"
        min={min }
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

export default SliderColumnFilter;