import Card from '../UI/Card';
import '../UI/Card.css'
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    return(
        <Card className='expense-date'>
            <div className='expense-date__day'>{new Date(props.date).toLocaleDateString('en-US', {day: '2-digit'})}({new Date(props.date).toLocaleDateString('en-US',{weekday: 'short'})})</div>
            <div className='expense-date__month'>{new Date(props.date).toLocaleDateString('en-US',{month: 'short'})}</div>
            <div className='expense-date__year'>{new Date(props.date).getFullYear()}</div>
        </Card>
    );
}

export default ExpenseDate;