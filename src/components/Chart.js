import React, { Component } from "react";
import ChartComponent, { Line } from "react-chartjs-2";

let values = [
  {
    date: "some_date_1",
    value: 1
  },
  {
    date: "some_date_2",
    value: 2
  },
  {
    date: "some_date_3",
    value: 3
  }
];

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: values.map((value) => value.date),
        datasets: [
          {
            label: "# of Votes",
            data: values.map((value) => value.value),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
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
        <div className="chart">
          Chart Component
          <Line data={this.state.chartData} options={{}} />
        </div>
        
      </div>
    );
  }
}

export default Chart;
