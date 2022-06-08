import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
const [removedlist,setremovedlist]=useState(props.items);

  const deleteHandler=event=>{
    setremovedlist(prevList=>{
      const updatedlist=prevList.filter(prev=>prev.id !== event)
      return updatedlist;
    })
       
  }
  
  

  return (
    <Card className="expenses">
      { removedlist.map(obj=>(<ExpenseItem
        key={obj.id}
        id={obj.id}
        title={obj.title}
        amount={obj.amount}
        date={obj.date}
        removed={deleteHandler}
      />))}
      {/* <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        remove={deleteHandler}
      />
      <ExpenseItem
        
        id={props.items[1].id}
        amount={props.items[1].amount}
        date={props.items[1].date}
        remove={deleteHandler}
      />
      <ExpenseItem
       
        id={props.items[2].id}
        amount={props.items[2].amount}
        date={props.items[2].date}
        remove={deleteHandler}
      />
      <ExpenseItem
        
        id={props.items[3].id}
        amount={props.items[3].amount}
        date={props.items[3].date}
        remove={deleteHandler}
      /> */}
    </Card>
  );
}

export default Expenses;