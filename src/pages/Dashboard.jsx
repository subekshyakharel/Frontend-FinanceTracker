import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Dashboard = () => {
  return (
    <div>
      <Container className='p-5'>
        <Row className='bg-dark p-5 rounded'>
            <Col md={6}>
           TO DO dashboard
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard;
