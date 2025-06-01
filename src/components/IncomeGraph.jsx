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

const IncomeGraph = () => {
  const { transactions } = useUser();

  const incomeData = transactions
    .filter((item) => item.type === "income")
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const labels = incomeData.map((item) =>
    new Date(item.createdAt).toLocaleDateString("en-GB")
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Income Over Time",
        data: incomeData.map((item) => parseFloat(item.amount)),
        fill: false,
        borderColor: "#28a745",
        tension: 0.4,
        pointBackgroundColor: "#28a745",
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
  <div className="bg-light mb-2 p-4 rounded" style={{width:"100%"}}>
 <Line data={data} options={options} />
 </div>
  </>
  )
  
};

export default IncomeGraph;
