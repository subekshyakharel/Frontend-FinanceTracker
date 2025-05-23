import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FinanceTips from '../components/FinanceTips'
import SignUpForm from '../components/SignUpForm'

const Signup = () => {
  
  return (
    <div>
      <Container className='p-5'>
        <Row className='bg-dark p-5 rounded'>
            <Col md={6}>
            <FinanceTips/>
            </Col>
            <Col md={6}>
            <SignUpForm/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup
