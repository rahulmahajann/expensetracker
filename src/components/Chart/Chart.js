import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    
    const monthlyValue = props.chartData.map(chartItem => chartItem.value);
    const annualValue = Math.max(...monthlyValue);
    
    // console.log(props.charData);

    return(
        <div className='chart'>
            {
                props.chartData.map(
                    (chartItem) => (
                        <ChartBar 
                            key = {chartItem.label}
                            value = {chartItem.value}
                            maxValue = {annualValue}
                            label = {chartItem.label}
                        />
                    )
                )
            }
        </div>
    );
};

export default Chart;