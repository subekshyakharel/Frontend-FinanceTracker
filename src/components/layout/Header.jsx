import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import { TbLogin } from "react-icons/tb";
import { IoCreate } from "react-icons/io5";
import { AiFillDashboard } from "react-icons/ai";
import { CiBank } from "react-icons/ci";
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

const Header = () => {
  const {user, setUser} = useUser();
  const [showMenu, setShowMenu] = useState(false)

  const handleOnLogout = ()=>{
    alert("Are you sure you want to logout?")
    localStorage.removeItem("accessJWT");
    setUser({});
    setShowMenu(false)

  }
  return (
    <>
       <Navbar expand="lg" variant='dark' className="bg-body-dark"
       expanded={showMenu}>
      <Container>
        <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
        {
          user?.name && <div>
          Welcome {user.name}!
        </div>
        }
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setShowMenu(true)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              user?._id ? (
                <>
                 <Link className='nav-link' onClick={()=>setShowMenu(false)} to="/dashboard">
            <AiFillDashboard />Dashboard
            </Link>
            <Link onClick={()=>setShowMenu(false)} className='nav-link' to="/transaction">
           <CiBank/> Transaction
            </Link>
            <Link onClick={handleOnLogout} className='nav-link'>
            <ImExit />Logout
            </Link>
                </>
              ): (
                <>
                <Link onClick={()=>setShowMenu(false)} className='nav-link' to="/signup">
            <IoCreate/>SignUp
            </Link>
            <Link onClick={()=>setShowMenu(false)} className='nav-link' to="/">
            <TbLogin />Login
            </Link>
                </>
              )
            }
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
