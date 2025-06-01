import { Col, Container, Row } from 'react-bootstrap';
import PieChart from './PieChart';
import IncomeGraph from './IncomeGraph';
import ExpenseGraph from './ExpenseGraph';

const DashboardChart = () => {
  return (
    <>
    <Container className='p-3'>
        <Row className='g-3'>
            <Col>
           <PieChart/>
            </Col>

            <Col>
            <IncomeGraph/>
               <ExpenseGraph/>
            </Col>

        </Row>
    </Container>
       
    </>
  )
}

export default DashboardChart