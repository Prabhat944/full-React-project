import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
const Expenses = ()=>{
    const expense=[
        {title:"Car Insurence",amount:347.65,date:new Date(2022, 1, 5),location:"Main Road"},
        {title:"Resturent Bill",amount:576.90,date:new Date(2022, 5, 22),location:"Gol Bagicha"},
        {title:"House EMI",amount:9824.67,date:new Date(2022, 2, 46),location:"SUN CITY"},
        {title:"ELectricity Bill",amount:1240.36,date:new Date(2022, 6, 13),location:"SBPDCL Office"}
      ]
    return <Card className='expenses'>
    <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} location={expense[0].location}></ExpenseItem>
    <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} location={expense[1].location}></ExpenseItem>
    <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} location={expense[2].location}></ExpenseItem>
    <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} location={expense[3].location}></ExpenseItem>
     
    </Card>
}


export default Expenses;