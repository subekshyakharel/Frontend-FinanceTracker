import { useUser } from '../context/UserContext';
import { useEffect } from 'react';
import DashboardBalance from '../components/DashboardBalance';
import { Container } from 'react-bootstrap';
import DashboardChart from '../components/DashboardChart';
import BarChart from '../components/BarChart';

const Dashboard = () => {
  const {getTransaction } = useUser();

    useEffect(() => {
    getTransaction();
  }, []);

  return (
    <>
    <div className='p-5'>
    <Container className='bg-dark p-4 rounded'>
      <DashboardBalance/>
       <DashboardChart/>
       <BarChart/>
   </Container>
   </div>
    </>
  );
};

export default Dashboard;
