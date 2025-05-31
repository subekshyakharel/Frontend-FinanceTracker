import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../hooks/useForm";
import { toast } from 'react-toastify';
import { postNewTransaction } from "../../helpers/axios";
import { useUser } from "../context/UserContext";

const initialState = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};

const TransactionForm = () => {
  // const [form, setForm] = useState({});
  const { form, setForm, handleOnChange } = useForm(initialState);
  const {getTransaction, toggleModal} = useUser();
  const fields = [
    {
      label: "Title",
      required: true,
      type: "text",
      name: "title",
      placeholder: "Salary",
      value: form.title,
    },
    {
      label: "Amount",
      required: true,
      type: "number",
      name: "amount",
      placeholder: "**********",
      value: form.amount,
    },
    {
      label: "Transaction Date",
      required: true,
      type: "date",
      name: "tdate",
      value: form.tdate,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const pending  = postNewTransaction(form);
    toast.promise(pending, {
      pending:"Please wait....."
    })
    const {status, message} = await pending
    toast[status](message);

    if(status ==="success"){
      setForm(initialState)
      getTransaction();
      toggleModal(false)
    } 
  };
  return (
    <div className="border rounded p-3">
      <h4 className="mb-4">Add your transactions!</h4>
    
      <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
        <Form.Label>Transaction Type</Form.Label>
        <Form.Select name="type" onChange={handleOnChange} value={form.type} required>
          <option value="">--Select--</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </Form.Select>
      </Form.Group>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TransactionForm;
