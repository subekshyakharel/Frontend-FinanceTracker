import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import { useUser } from "./context/UserContext";
import { useEffect } from "react";
import { autoLogin } from "./utils/users";
import Auth from "./auth/Auth";
const App = () => {
  // page refresh huda pani data basirakhney
  const {user, setUser} = useUser();
  useEffect(()=>{
    !user?._id && updateUser();
  }, [user?._id])

  const updateUser = async() =>{
    const user = await autoLogin();
   setUser(user);
  }
  // upto here  have used users.js , axios.jsx, 
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />
          <Route
            path="transaction"
            element={
              <Auth>
                <Transactions />
              </Auth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
