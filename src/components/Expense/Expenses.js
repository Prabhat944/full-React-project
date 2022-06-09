import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {  
  const [filteredYear,setFiltered]=useState('2020');
const filterChangeHandler=selected=>{
setFiltered(selected);
}

const filteredObject=props.items.filter(expense=>{
  return expense.date.getFullYear().toString() === filteredYear;
})

let ExpenseContent=<p>No Expense Found</p>;
if(filteredObject.length > 0){
  ExpenseContent= filteredObject.map(obj=>(<ExpenseItem
    key={obj.id}
    id={obj.id}
    title={obj.title}
    amount={obj.amount}
    date={obj.date}

  />))
}
  return  (
      <Card className="expenses">
        <div>
          <ExpenseFilter filtered={filteredYear} onFiltered={filterChangeHandler}/>
        </div>
        {ExpenseContent}
        {filteredObject.length === 1 && <p>Only single Expense here. Please add more..</p>}
      
    </Card>
    
  );
}

export default Expenses;