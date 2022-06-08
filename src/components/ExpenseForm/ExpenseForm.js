import React,{useState} from 'react';
import './ExpenseForm.css';
import Card from '../UI/Card';

const ExpenseForm = (props)=>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
// const [userInput,setUserInput] =useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// });
    const textHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
    }
    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
    }
    const dateHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
    }
    const addExpenseHandler=(event)=>{
       event.preventDefault();
       const output={
           title:enteredTitle,
           amount:enteredAmount,
           date:new Date(enteredDate)
       }
        props.newExpense(output);
    }
return <Card className='new-expense'>
    <form onSubmit={addExpenseHandler}> 
        <div className='new-expense__control'>
        <label>Expense Title</label>
        <input type='text' value={enteredTitle}  onChange={textHandler} required/>
        </div>
        <div className='new-expense__control'>
        <label>Expense Amount</label>
        <input type='number' value={enteredAmount} onChange={amountHandler} required/>
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' value={enteredDate}  onChange={dateHandler} required/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

    </form>
</Card>
}

export default ExpenseForm;