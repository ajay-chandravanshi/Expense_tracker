

const Filter = ({filter,setFilter}) => {
  return (
    <div className="filter-container">
        <label>Filter by Category</label>

        <select className="filter" value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option>All</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Other</option>
        </select>
      
    </div>
  )
}

export default Filter
