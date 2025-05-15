import { Route, Routes } from 'react-router-dom';
import './App.css'
 import { ToastContainer, toast } from 'react-toastify';
import Login from './pages/Login';
const App=()=> {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
