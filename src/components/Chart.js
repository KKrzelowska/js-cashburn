import React, { Component } from "react";
import ChartComponent, { Line } from "react-chartjs-2";



class Chart extends Component {
  constructor(props) {
    super(props);
    let array = props.values;
    let dates = array.map(([date,])=>date),
        values = array.map(([,value])=>value);
    let seconds = dates.map(date=> Math.floor(new Date().getTime()/1000))



    this.state = {
      chartData: {
        labels: seconds,
        datasets: [
          {
            label: "# Savings",
            data: values,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
           
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1
           
          }
          
        ]
      
      }
      
    };
   
     
    
  }
  render() {
    return (
      <div>
        <div className="Chart" style={{position: "relative", width: 600, height:550}}>
          Chart Component
          <Line data={this.state.chartData} options={{ scales:{
            xAxis:[{stacked: true }]
          }}} />
        </div>
        
      </div>
    );
  }
}

export default Chart;