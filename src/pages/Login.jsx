import { Col, Container, Row } from "react-bootstrap"
import LoginForm from "../components/LoginForm"
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";


const Login = () => {
  return (
    <>
    <Container className="bg-dark rounded p-3 mt-4">
      <Row>
        <Col md={6}>
        <LoginForm/>
        </Col>
        <Col md={6}>
        <div className='d-flex flex-column justify-content-center' 
    style={{height:"100%"}}>
       <div className="p-3">
             <BsGraphDownArrow className="text-danger" style={{fontSize:"5rem"}}/>{" "}
               <span className="text-danger text-decoration-line-through" style={{fontSize:"1.5rem"}}>Reduce your Expenses</span>
          </div> 
          <div className="p-3">
            <BsGraphUpArrow className="text-success" style={{fontSize:"5rem"}} /> {" "}
            <span className="text-success"  style={{fontSize:"1.5rem"}}>Increase your Income</span>
          </div>
    </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Login
