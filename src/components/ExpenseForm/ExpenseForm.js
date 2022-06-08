import React,{useState} from 'react';
import './ExpenseForm.css';
import Card from '../UI/Card';

const ExpenseForm = ()=>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const textHandler=(event)=>{
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    }
    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    }
    const dateHandler=(event)=>{
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    }
return <Card className='new-expense'>
    <form>
        <div className='new-expense__control'>
        <label>Expense Title</label>
        <input type='text' value={enteredTitle} onChange={textHandler}/>
        </div>
        <div className='new-expense__control'>
        <label>Expense Amount</label>
        <input type='number' value={enteredAmount} onChange={amountHandler}/>
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' value={enteredDate} onChange={dateHandler}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

    </form>
</Card>
}

export default ExpenseForm;