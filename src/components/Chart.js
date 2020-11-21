import React, {Component} from "react";
import ChartComponent, {Line} from "react-chartjs-2";


class Chart extends Component {
    constructor(props) {
        super(props);
        let values = props.values;

        this.state = {
            chartData: {
                labels: values.map((value) => value[0]),
                datasets: [
                    {
                        label: "# of Votes",
                        data: values.map((value) => value[1]),
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
                <div className="chart">
                    Chart Component
                    <Line data={this.state.chartData} options={{}}/>
                </div>

            </div>
        );
    }
}

export default Chart;
