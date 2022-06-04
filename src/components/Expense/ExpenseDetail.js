import './ExpenseDetail.css';



const ExpenseDetail=(props)=>{

    return  <span className="expense-item__description">
           <h2>{props.title}</h2>
           <div className="expense-item__location">{props.location}</div>
           <div className="expense-item__price"><h3>$ {props.amount}</h3></div>
           </span>
    
 
}


export default ExpenseDetail;