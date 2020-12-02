import React, { Component } from "react";
import ChartComponent, { Line } from "react-chartjs-2";
import moment from "moment";

class Chart extends Component {
  constructor(props) {
    super(props);
    const currentMonthDates = Array.from(
      { length: moment().daysInMonth() },(x, i) => moment().startOf("month").add(i, "days")
    );
    let data = () => props.values.map((arr) => ({ t: arr[0], y: arr[1] }));


    this.state = {
      chartData: {
        labels: currentMonthDates,
        datasets: [
          {
            label: "# Savings",
            data: data(),
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>


        <div
          className="Chart"
          style={{ position: "relative", width: 600, height: 550 }}
        >
          Chart Component
          <Line
            data={this.state.chartData}
            options={{
              scales: {
                xAxes: [
                  {
                    type: "time",
                    position: "bottom",
                    time: {
                      displayFormats: { day: "DD" },
                      tooltipFormat: "DD",
                      unit: "day",
                      maxTicksLimit: 31
                    },
                    
                    gridLines: {
                      display: false,
                    }
                     
                  },
                ],

                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                plugins: {
                  datalabels: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Chart;