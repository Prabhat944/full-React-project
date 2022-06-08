import React,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
const [title , setTitle] =  useState(props.title);
const [amount , setAmount] =  useState(props.amount);
const editTitle=()=>{
setTitle('Changed');
}
const editAmount=()=>{
  setAmount(prevAmount=>{
    const total=prevAmount+100;
    return total;
  })
}
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button type='submit'  onClick={editTitle}>Edit Title</button>
        <button type='submit'  onClick={editAmount}>Change Expense</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;