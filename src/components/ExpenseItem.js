import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
function ExpenseItem(props){
    
return <div className="expense-item">
          <ExpenseDate date={props.date}/>
          <h2>
              <ExpenseDetail title={props.title} location={props.location} amount={props.amount} />
          </h2>
    </div>
}


export default ExpenseItem;