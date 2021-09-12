import * as React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js';


Chart.register(...registerables);
interface IChartProps {}

const ChartComponent: React.FunctionComponent<IChartProps> = (props) => {
  const chartRef = React.useRef<any>(null);
  const [myChart, setMyChart] = React.useState<Chart>();
  React.useEffect(()=>{
    if (!chartRef) return;
    const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop(0, '#f8ff00');
    gradient.addColorStop(1, '#3ad59f');

    const myChart: Chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [33, 53, 85, 41, 44, 65],
        datasets: [
          {
            fill: true,
            data: [-33, 25, 35, 51, 54, 76, -24],
            backgroundColor: gradient,
            borderWidth: 2,
            tension: 0.4,
            borderColor: '#818181',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          yAxes: {
            beginAtZero: true,
          },
        },
      },
    }); 
    setMyChart(myChart);

  },[chartRef])
    //React.useEffect(() => {
    //   if (!myChart) return;
    //  // myChart.data.datasets[0].data = data;
    //   myChart.update();
    // }, [data, myChart]);


  return <canvas ref={chartRef} id="myChart" width="100%" height="100%" />;
};

export default ChartComponent;
