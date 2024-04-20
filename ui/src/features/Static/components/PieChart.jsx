import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData, title, width, height}) {
  return <Pie data={chartData} options = {
    {
      plugins: {
        title: {
          display: true,
          text: title
        }
      }
    }
  } />;
}

export default PieChart;