import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useUser } from '../context/UserContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 
const BarChart = ()=> {
    const {income, expense} = useUser();

    const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Transactions Bar Chart',
    },
  },
};

const labels = ['Income & Expense', ];

 const data = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: [income || 0],
      backgroundColor: 'rgba(107, 243, 130, 0.5)',
    },
    {
      label: 'Expense',
      data: [expense || 0],
      backgroundColor: 'rgba(245, 72, 66, 0.5)',
    },
  ],
};

  return (
    <>
    <div className='bg-light rounded p-3'>
  <Bar options={options} data={data} />
  </div>
  </>
);
}

export default BarChart;