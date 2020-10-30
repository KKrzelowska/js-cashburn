import React from "react";
import { Line } from "react-chartjs-2";

const state = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [
        {
            label: "Cash",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75, 192, 192, 1)",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2,
            data: [2450, 2100, 1700, 1300, 1110, 904, 888, 345],
        },
    ],
};

const Chart = () => {
    return (
        <div>
            <Line
                data={state}
                options={{
                    title: { display: true, text: "Current Month", fontSize: 20 },
                    legend: { display: true, position: "right" },
                }}
            />
        </div>
    );
    t;
};

export default Chart;