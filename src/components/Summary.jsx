

const Summary = ({expenses}) => {

    const total = expenses.reduce((sum,e)=> sum + e.amount,0)

    const count=(cat)=>expenses.filter((e)=>e.category === cat).length
  return (
    <div className="summary">
        <h2>Total Spent: {total} Rs</h2>
        <div className="categories">
            <p>Food: {count("Food")}</p>
            <p>Travel: {count("Travel")}</p>
            <p>Shopping: {count("Shopping")}</p>
            <p>Bills: {count("Bills")}</p>
            <p>Other: {count("Other")}</p>
        </div>
      
    </div>
  )
}

export default Summary
