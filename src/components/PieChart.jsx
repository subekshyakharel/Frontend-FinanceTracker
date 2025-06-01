import { useUser } from '../context/UserContext'
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
     const {income, expense} = useUser();

     const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income || 0, expense || 0],
        backgroundColor: ["#28a745", "#dc3545"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "50%",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  
  return (
    <>
    <div className='bg-white rounded'>
          <Doughnut
  options={options}
  data={data}
/>
        </div>
    </>
  )
}

export default PieChart