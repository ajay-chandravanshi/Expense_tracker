import ExpenseItem from "./ExpenseItem"

const ExpenseList = ({expenses,deleteExpense}) => {

    if(expenses.length === 0){
        return <p>No Expenses Added</p>
    }
  return (
    <div className="list">
      {
        expenses.map((item)=>(
            <ExpenseItem key={item.id} item={item} deleteExpense={deleteExpense} />
        ))
      }
    </div>
  )
}

export default ExpenseList
