import React from "react";
import { useUser } from "../context/UserContext";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const ExpenseGraph = () => {
  const { transactions } = useUser();

  const expenseData = transactions
    .filter((item) => item.type === "expenses")
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const labels = expenseData.map((item) =>
    new Date(item.createdAt).toLocaleDateString("en-GB")
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses Over Time",
        data: expenseData.map((item) => parseFloat(item.amount)),
        fill: false,
        borderColor: "#DC143C",
        tension: 0.4,
        pointBackgroundColor: "#DC143C",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext("2d");
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#000" },
      },
      x: {
        ticks: { color: "#000" },
      },
    },
  };

  return(
  <>
  <div className="bg-light p-4 rounded" style={{width:"100%"}}>
 <Line data={data} options={options} />
 </div>
  </>
  )
  
};

export default ExpenseGraph;
