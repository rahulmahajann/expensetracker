import ExpenseItem from "./ExpenseItem";

import './ExpenseList.css';

const ExpenseList = (props) => {
    if(props.expenseArray.length === 0){
        return <h2 className='expense-list__fallback'> No expense Found </h2>
    }

    return(
        <ul className='expense-list'>
            {
                props.expenseArray.map(
                    (expense) => 
                        <ExpenseItem 
                            key = {expense.id}
                            name = {expense.name}
                            amount = {expense.amount}
                            date = {expense.date}
                        />    
                )
            }
        </ul>
    );

}

export default ExpenseList;