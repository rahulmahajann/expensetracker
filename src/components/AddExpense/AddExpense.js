import { useState } from 'react';

import './AddExpense.css';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => {
    
    const [isForm, setIsForm] = useState(false);

    const AddExpenseData = (formData) => {

        const expenseItem = {
            ...formData,
            id: Math.random().toString()
        }

        // console.log(expenseitem);
        props.onSaveExpenseItem(expenseItem);
        setIsForm(false);
    };

    const showFormHandler = () => {
        setIsForm(true);
    }

    const discardHandler = () => {
        setIsForm(false);
    }

    return(
        <div className='new-expense'>
            {isForm 
            ? <ExpenseForm onAddExpense={AddExpenseData} onCancel={discardHandler} /> :
            <button onClick={showFormHandler} > Add New Expense </button>
            }
            
            
        </div>
    );
}

export default AddExpense;