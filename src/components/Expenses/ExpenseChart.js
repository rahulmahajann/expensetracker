import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
    
    const chartMonth = [
        {
            label: 'Jan',
            value: 0
        },
        {
            label: 'Feb',
            value: 0
        },
        {
            label: 'Mar',
            value: 0
        },
        {
            label: 'Apr',
            value: 0
        },
        {
            label: 'May',
            value: 0
        },
        {
            label: 'Jun',
            value: 0
        },
        {
            label: 'Jul',
            value: 0
        },
        {
            label: 'Aug',
            value: 0
        },
        {
            label: 'Sept',
            value: 0
        },
        {
            label: 'Oct',
            value: 0
        },
        {
            label: 'Nov',
            value: 0
        },
        {
            label: 'Dec',
            value: 0
        }
    ];

    for(const expense of props.expenses){
        const expenseMonth = new Date(expense.date).getMonth();
        chartMonth[expenseMonth].value += expense.amount;
    }

    // console.log(chartMonth);

    return(
        <Chart chartData = {chartMonth} />
    );
};

export default ExpenseChart;