import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from './CustomInput';
import { useForm } from '../hooks/useForm';
import { loginUser } from '../../helpers/axios';
import { toast } from 'react-toastify';
import { useUser } from '../context/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const initialState = {
    email:"", 
    password:"",
}

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false)
  // console.log(location)

    const {user, setUser} = useUser();
    const {form , setForm, handleOnChange}=useForm(initialState);

    //goto ra uselocation  le chai arko tab ma open garda jun open gareko teo kholxa yessko lagi auth ma oani gayera state from :location dina parxa navigate ko thau ma
    const goto = location?.state?.from?.pathname || "/dashboard"
    useEffect(()=>{
      user?._id && navigate(goto)
    }, [user?._id, navigate, goto])

    const fields = [
  {
    label:"Email", 
    required:true, 
    type:"email", 
    name:"email", 
    placeholder:"Your Email", 
    value:form.email,
  },
  {
    label:"Password", 
    required:true, 
    type:"password", 
    name:"password", 
    placeholder:"******",
    value:form.password
  },
]


const handleOnSubmit =async e =>{
    e.preventDefault();
    setIsLoading(true)

   const pendingResp= loginUser(form);
    toast.promise(pendingResp, {
      pending:"Please wait...."
    });
     const {status, message, accessJWT, user }= await pendingResp;
    toast[status](message);
 setUser(user);
 localStorage.setItem("accessJWT", accessJWT);
 localStorage.setItem("userInfo",JSON.stringify(user) );
 setIsLoading(false)
    
}

  return (
    <>
      <div className='border p-3 rounded d-flex flex-column justify-content-center'>
         <Form onSubmit={handleOnSubmit}>
            {
                fields.map((input)=>{
                 return   <CustomInput {...input} key={input.name} onChange={handleOnChange}/>
                })
            }
      <div className="d-grid">
        <Button variant="primary" disabled={isLoading} type="submit">
        Submit
      </Button>
      </div>
      <p className='text-center mt-3'>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </Form>
      </div>
    </>
  )
}

export default LoginForm
