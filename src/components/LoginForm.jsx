import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from './CustomInput';
import { useForm } from '../hooks/useForm';
import { loginUser, postNewUser } from '../../helpers/axios';
import { toast } from 'react-toastify';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
    email:"", 
    password:"",
}

const LoginForm = () => {
  const {user, setUser} = useUser();
  const navigate = useNavigate();
    // const [form, setForm] = useState({});
    const {form , setForm, handleOnChange}=useForm(initialState);

    useEffect(()=>{
      user?._id && navigate("/dashboard")
    }, [user?._id, navigate])

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

// const handleOnChange = e =>{
//     const {name, value} = e.target;
//     setForm({
//         ...form, 
//         [name]:value,
//     })
// }

const handleOnSubmit =async e =>{
    e.preventDefault();
    // console.log(form)

   const pendingResp= loginUser(form);
    toast.promise(pendingResp, {
      pending:"Please wait...."
    });
     const {status, message, accessJWT, user }= await pendingResp;
    toast[status](message);
 console.log(accessJWT, user);
 setUser(user);
    
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
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
      
    </Form>
      </div>
    </>
  )
}

export default LoginForm
