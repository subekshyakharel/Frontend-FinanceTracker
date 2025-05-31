import {Col, Container, Row} from 'react-bootstrap'

const Footer = () => {
  return (
    <div className=''>
        <Container fluid className='bg-dark p-3'>
            <Row className='text-center'>
                <Col>
                &copy; copy all reserved. || Made by <a href=''>Subekshya</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
