import React,{useState} from 'react';
import './ExpenseForm.css';
import Card from '../UI/Card';

const ExpenseForm = (props)=>{
    // const [enteredTitle,setEnteredTitle] = useState('');
    // const [enteredAmount,setEnteredAmount] = useState('');
    // const [enteredDate,setEnteredDate] = useState('');
const [userInput,setUserInput] =useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
});
    const textHandler=(event)=>{
        // setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value
        })
    }
    const amountHandler=(event)=>{
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount:event.target.value
        })
    }
    const dateHandler=(event)=>{
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate:event.target.value
        })
    }
    const addExpenseHandler=(event)=>{
       event.preventDefault();
        props.newExpense(userInput);
    }
return <Card className='new-expense'>
    <form onSubmit={addExpenseHandler}> 
        <div className='new-expense__control'>
        <label>Expense Title</label>
        <input type='text'  onChange={textHandler}/>
        </div>
        <div className='new-expense__control'>
        <label>Expense Amount</label>
        <input type='number'  onChange={amountHandler}/>
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type='date'  onChange={dateHandler}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

    </form>
</Card>
}

export default ExpenseForm;