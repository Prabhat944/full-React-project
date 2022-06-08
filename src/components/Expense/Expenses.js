import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {  

  return (
    <Card className="expenses">
      { props.items.map(obj=>(<ExpenseItem
        key={obj.id}
        id={obj.id}
        title={obj.title}
        amount={obj.amount}
        date={obj.date}
    
      />))}
    </Card>
  );
}

export default Expenses;