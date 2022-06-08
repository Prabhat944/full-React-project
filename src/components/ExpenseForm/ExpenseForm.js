import React from 'react';
import './ExpenseForm.css';
import Card from '../UI/Card';

const ExpenseForm = ()=>{
    

    const textHandler=(event)=>{
        console.log(event.target.value);
    }
    const amountHandler=(event)=>{
        console.log(event.target.value);
    }
    const dateHandler=(event)=>{
        console.log(event.target.value);
    }
return <Card>
    <form>
        <div>
        <label>Expense Title</label>
        <input type='text' onChange={textHandler}/>
        <label>Expense Amount</label>
        <input type='number' onChange={amountHandler}/>
        <label>Date</label>
        <input type='date' onChange={dateHandler}/>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

    </form>
</Card>
}

export default ExpenseForm;