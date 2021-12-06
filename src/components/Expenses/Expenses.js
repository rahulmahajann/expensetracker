import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import Card from '../UI/Card';
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {

    const[filteredYear, setFilteredYear] = useState('2019');
    
    const filterChange = (yearChanged) => {
        setFilteredYear(yearChanged);
    };

    const filteredExpenses = props.items.filter(expense => {
        return new Date(expense.date).getFullYear().toString() === filteredYear;
    })

    return(
        <div>
            <Card className='expenses'>
                <ExpenseFilter default={filteredYear} onFilterChange = {filterChange} />
                <ExpenseChart expenses = {filteredExpenses} />
                <ExpenseList expenseArray = {filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;