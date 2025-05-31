import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomInput from './CustomInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postNewUser } from '../../helpers/axios';
import { useForm } from '../hooks/useForm';


const initialState = {
    name:"", 
    email:"", 
    password:"", 
    confirmPassword:"", 

}

const SignUpForm = () => {

    // const [form, setForm] = useState({});
    const {form, setForm, handleOnChange}= useForm({})
    const fields = [
        {
            label:"Name", 
            required: true, 
             type: "text", 
            name:"name",
            placeholder:"Your name" ,
            value:form.name, 
        }, 
        {
            label:"Email", 
            required: true, 
             type: "email", 
            name:"email", 
            placeholder:"Example@gmail.com",
            value:form.email,
        }, 
        {
            label:"Password", 
            required: true, 
             type: "password", 
            name:"password", 
            placeholder:"**********",
            value:form.password,
        }, 
        {
            label:"Confirm Password", 
            required: true, 
             type: "password", 
            name:"confirmPassword", 
            placeholder:"**********",
            value:form.confirmPassword,
        }, 
    ]

    const handleOnSubmit = async e=>{
        e.preventDefault();
        const {confirmPassword, ...rest} = form;
        if(confirmPassword !== rest.password)
        {
            return toast.error("Password do not match!")
        }

      
             const {status, message} = await postNewUser(rest)
        toast[status](message);
     status=="success" && setForm(initialState)
    }
  return (
    <div className='border rounded p-3'>
        <h4 className='mb-4'>Sign up now!</h4>
       <Form onSubmit={handleOnSubmit}>
        {
            fields.map((input)=><CustomInput key={input.name} {...input} onChange={handleOnChange} /> )
        }
      

      <div className="d-grid">
              <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>

    </Form>
    </div>
  )
}

export default SignUpForm
