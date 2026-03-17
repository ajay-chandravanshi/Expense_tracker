import { useState } from "react"


const ExpenseForm = ({addExpense}) => {
    const[title,setTitle]=useState("")
    const[amount,setAmount]=useState("")
    const[category,setCategory]=useState("Food")
    const[date,setDate]=useState("")
    const[error,setError]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!title){
            return setError("Titlte is required")
        }

        if(amount<=0){
            return setError("Amount must be greater than 0")
        }

        const expense={
            id:Date.now(),
            title,
            amount:Number(amount),
            category,
            date,
        }

        addExpense(expense)
        setTitle("")
        setAmount("")
        setCategory("Food")
        setDate("")
        setError("")

    }
  return (
    <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />

        <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />

        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Other</option>
        </select>

        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />

        <button>Add Expense</button>
        {error && <p className="error">{error}</p> }
    </form>
  )
}

export default ExpenseForm
