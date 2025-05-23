import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import { TbLogin } from "react-icons/tb";
import { IoCreate } from "react-icons/io5";
import { AiFillDashboard } from "react-icons/ai";
import { CiBank } from "react-icons/ci";
// import { useContext } from 'react';
// import { userContext } from '../../context/UserContext';

const Header = () => {
  // const useUser =()=> useContext(userContext);
  // const data = useUser();
  // console.log(data)
  return (
    <>
       <Navbar expand="lg" variant='dark' className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/signup">
            <IoCreate/>SignUp
            </Link>
            <Link className='nav-link' to="/">
            <TbLogin />Login
            </Link>
            <Link className='nav-link' to="/dashboard">
            <AiFillDashboard />Dashboard
            </Link>
            <Link className='nav-link' to="/transaction">
           <CiBank/> Transaction
            </Link>
            <Link className='nav-link' to="/logout">
            <ImExit />Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
