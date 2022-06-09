import React,{useState} from 'react';
import './ExpenseForm.css';


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
           amount: +enteredAmount,
           date:new Date(enteredDate)
       }
        props.newExpense(output);
    }
    
return <div className='new-expense'>
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
    <input type='date' value={enteredDate}  onChange={dateHandler} min="2019-01-01" max="2022-12-31" required/>
    </div>
    <div>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Submit</button>
    </div>

</form>
    
</div>
}

export default ExpenseForm;