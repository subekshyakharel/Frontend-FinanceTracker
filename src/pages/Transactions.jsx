import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Transactions = () => {
  return (
    <div>
      <Container className='p-5'>
        <Row className='bg-dark p-5 rounded'>
            <Col md={6}>
           TO DO Transactions
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Transactions;
