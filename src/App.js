import ExpenseItem from './components/ExpenseItem';
function App() {
  let rows = [];
   for (let i = 0; i < 101; i++) {
    rows.push(ExpenseItem);
    }
  return (
   <div>
     <h2>ExpenseItem!</h2>
     <h2>Food Rs 10</h2>
     <h2>Petrol Rs 100</h2>
     <h2>Movies Rs 200</h2>
    {rows.map((ExpenseItem)=>{
      return <ExpenseItem/>
    })}
     
   </div>
  );
}

export default App;
