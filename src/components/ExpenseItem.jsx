

const ExpenseItem = ({item, deleteExpense}) => {
  return (
    <div className="card">
      <div>
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        <p>{item.date}</p>
      </div>

      <div className="right">
        <span className="amount">{item.amount} Rs</span>
        <button className="delete-btn" onClick={()=>deleteExpense(item.id)}>Delete</button>

      </div>
    </div>
  )
}

export default ExpenseItem
