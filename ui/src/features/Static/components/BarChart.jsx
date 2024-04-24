import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData, title }) {
  return <Bar data={chartData} options = {
    {
      plugins: {
        title: {
          display: true,
          text: title
        }
      }
    }
  } />
}

export default BarChart;