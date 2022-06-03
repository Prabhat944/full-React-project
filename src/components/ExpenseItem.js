import "./ExpenseItem.css";
function ExpenseItem(){
    const date=new Date(2022, 2, 16);
    const amount=235.80;
    const title="Car Insurense";
    const location="Plaze Market"
return <div className="expense-item">
       <div className="expense-item__date">{date.toISOString()}</div>
       <div className="expense-item__description">
           <h2>{title}</h2>
           <div className="expense-item__location">{location}</div>
           <div className="expense-item__price"><h3>$ {amount}</h3></div>
       </div>
</div>
}


export default ExpenseItem;