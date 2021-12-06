import { useState } from 'react';
import axios from 'axios';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [addName, setAddName] = useState('');
    const [addAmount, setAddAmount] = useState('');
    const [addDate, setAddDate] = useState('');

    const addNameHandler = (e) => {
        setAddName(e.target.value);
    };

    const addAmountHandler = (e) => {
        setAddAmount(e.target.value);
    };

    const addDateHandler = (e) => {
        setAddDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            name: addName,
            amount: +addAmount,
            date: addDate
        };

        props.onAddExpense(formData);

        axios.post('/expense/addExpense',formData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        // console.log(formData);

        setAddName('');
        setAddAmount('');
        setAddDate('');

    }

    return(
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Name</label>
                    <input type='text' value={addName} onChange={addNameHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.2' step='0.2' value={addAmount} onChange={addAmountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2018-01-01' max='2023-08-31' value={addDate} onChange={addDateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'> 
                <button type='button' onClick={props.onCancel}> Discard </button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;