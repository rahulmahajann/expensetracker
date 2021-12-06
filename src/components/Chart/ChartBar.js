import './ChartBar.css';

const ChartBar = (props) => {

    let barsFilled = '0%';

    if(props.maxValue > 0){
        barsFilled = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    // console.log(barsFilled);

    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                 className='chart-bar__fill' 
                 style={{height: barsFilled}}
                >
                </div>
            </div>
                <div className='chart-bar__label'>
                    {props.label}
                </div>
        </div>
    )
};

export default ChartBar;