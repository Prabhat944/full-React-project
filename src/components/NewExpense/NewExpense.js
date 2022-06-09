import React,{useState} from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Card from "../UI/Card";
import './NewExpense.css';

const NewExpense=(props)=>{
    const [isEditing,setIsEditing]=useState(false);
    const addNewExpenseHandler =()=>{
        setIsEditing(true);
    }
    const cancelNewExpense=()=>{
      setIsEditing(false);
    }
  
    return <Card className='new-expense'>
       {!isEditing && <button type='button' onClick={addNewExpenseHandler}>Add New Expense</button>}
       {isEditing && <ExpenseForm newExpense={props.newExpense} onCancel={cancelNewExpense} />}
    </Card>
}

export default NewExpense;