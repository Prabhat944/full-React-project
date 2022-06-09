import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart=props=>{

const dataPointValue=props.dataPoint.map(datapoint=>datapoint.value);
const totalMaximum=Math.max(...dataPointValue);

    return <div className='chart'>
        {props.dataPoint.map(element=>(
        <ChartBar 
         key={Math.random().toString()}
        label={element.label} 
        value={element.value} 
        maxValue={totalMaximum}
        />))}
    </div>
}

export default Chart;