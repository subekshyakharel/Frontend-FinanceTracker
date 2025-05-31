import { Navigate, useLocation } from "react-router-dom"
import { useUser } from "../context/UserContext"


const Auth = ({children}) => {
  const location = useLocation();
    // const isLoggedin = false;
    const {user} = useUser();
  return user?._id? children: <Navigate to="/" state={{from:location}} replace/>
}

export default Auth
