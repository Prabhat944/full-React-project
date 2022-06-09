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


  return  (
      <Card className="expenses">
        <div>
          <ExpenseFilter filtered={filteredYear} onFiltered={filterChangeHandler}/>
        </div>
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