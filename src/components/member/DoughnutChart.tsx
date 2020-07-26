import React, {useState} from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = () => {

  const data = {
    labels: ["Goals", "Assists"],
    datasets: [{
      data: [55, 30],
      backgroundColor: ['#4e73df', '#1cc88a'],
      hoverBackgroundColor: ['#2e59d9', '#17a673'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  };
  const options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}