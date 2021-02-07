import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const Chart = (values) => {
  let currentMonthDates = Array.from(
    { length: moment().daysInMonth() },
    (x, i) => moment().startOf('month').add(i, 'days')
  );
  const dataFromValues = values.values.map(arr => ({ t: arr.date, y: arr.value }));
  
  const dataChart = {
    labels: currentMonthDates,
    datasets: [
      {
        label: '# Savings',
        data: dataFromValues,
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }
    ]
  };
  console.log(values.values)
  return (
    <>    
      <div
        className="Chart"
        style={{ position: 'relative', width: 600, height: 550 }}>

        <Line
          data={dataChart}
          options={{
            scales: {
              xAxes: [
                {
                  type: 'time',
                  position: 'bottom',
                  time: {
                    displayFormats: { day: 'DD' },
                    tooltipFormat: 'DD',
                    unit: 'day',
                    maxTicksLimit: 31
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],

              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              plugins: {
                datalabels: {
                  display: false
                }
              }
            }
          }}
        />
      </div>
    </>
  );
};

export default Chart;
