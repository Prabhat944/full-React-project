import './ExpenseDetail.css';

function ExpenseDetail(props){

    return <div className='expense-item'>
           <div className="expense-item__description">
           <h2>{props.title}</h2></div>
           <div className="expense-item__location">{props.location}</div>
           <div className="expense-item__price"><h3>$ {props.amount}</h3></div>
         
         </div>
 
}


export default ExpenseDetail;