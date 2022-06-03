import './ExpenseDetail.css';
import Card from '../UI/Card';


const ExpenseDetail=(props)=>{

    return  <Card className="expense-item__description">
           <h2>{props.title}</h2>
           <div className="expense-item__location">{props.location}</div>
           <div className="expense-item__price"><h3>$ {props.amount}</h3></div>
           </Card>
    
 
}


export default ExpenseDetail;