
import { useEffect, useState } from 'react'
import Summary from './components/Summary'
import ExpenseForm from './components/ExpenseForm'
import Filter from './components/Filter'
import ExpenseList from './components/ExpenseList'
import './App.css'

const App=()=>{

  const[expenses,setExpenses]=useState([])
  const[filter,setFilter]=useState("All")
  const[editdata,setEditData]=useState(null)
  const[isEditing,setIsEditing]=useState(false)

  useEffect(()=>{
    const saved=localStorage.getItem("expenses")
    if(saved){
      setExpenses(JSON.parse(saved))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])

  const addExpense=(expense)=>{
    setExpenses([...expenses,expense])
  }

  const deleteExpense=(id)=>{
    const updated=expenses.filter((e)=>e.id !== id)
    setExpenses(updated)
  }

  const editExpense=(item)=>{
    setEditData(item)
    setIsEditing(true)
  }

  const updateExpense=(updatedExpense)=>{
    const updatedList= expenses.map((e)=>e.id === updatedExpense.id ? updatedExpense : e)
    setExpenses(updatedList)
    setIsEditing(false)
    setEditData(null)
  }

  const clearAll=()=>{
    if(window.confirm("Are You Sure?")){
      setExpenses([])
    }
  }

  const filteredExpenses=filter === "All"  ? expenses : expenses.filter((e)=>e.category === filter)
  return(
    <div className='container'>
      <h1>Expense Tracker</h1>

      <Summary expenses={expenses} />
      <ExpenseForm  addExpense={addExpense} updateExpense={updateExpense} isEditing={isEditing} editdata={editdata} />
      <Filter  filter={filter} setFilter={setFilter} />
      <ExpenseList  expenses={filteredExpenses} deleteExpense={deleteExpense} editExpense={editExpense} />


      <button className='clear-btn'onClick={clearAll} >Clear All</button>
    </div>
  )
}
export default App