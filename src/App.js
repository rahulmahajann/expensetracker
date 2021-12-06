import { useEffect, useState } from "react";
import AddExpense from "./components/AddExpense/AddExpense";
import Expenses from "./components/Expenses/Expenses";
import axios from 'axios';

const App = () => {

  const [expenses, setExpenses] = useState([])

  useEffect( async () => {      
      const data = await axios.get('/expense');
      setExpenses(data.data);
  });

  const saveExpenseItem = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <AddExpense onSaveExpenseItem={saveExpenseItem} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
