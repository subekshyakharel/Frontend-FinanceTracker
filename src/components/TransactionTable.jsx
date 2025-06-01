import Table from "react-bootstrap/Table";
import { useUser } from "../context/UserContext";
import { Button, Form } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { deleteTransactions } from "../../helpers/axios";
import { toast } from "react-toastify";

const TransactionTable = () => {
  const [displayTran, setDisplayTran] = useState([]);
  const { transactions, toggleModal , getTransaction , balance} = useUser();
  const [idsToDelete, setIdsToDelete] = useState([]);

      useEffect(() => {
    setDisplayTran(transactions);
  }, [transactions]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredArg = transactions.filter(({ title }) => {
      //item.title || {title}
      return title.toLowerCase().includes(value.toLowerCase());
    });
    setDisplayTran(filteredArg);
  };


  const handleOnCheck = (e) => {
    const { checked, value } = e.target;
    if (value === "all") {
      checked
        ? setIdsToDelete(displayTran.map((item) => item._id))
        : setIdsToDelete([]);
        return
    }

    if(checked){
      setIdsToDelete([...idsToDelete, value])
    } else {
      setIdsToDelete(idsToDelete.filter((id)=> id !== value))
    }
    return
  };

const handleOnDelete = async () => {
  if (confirm(`Are you sure you want to delete ${idsToDelete.length} transaction(s)`)) {
    const pending = deleteTransactions(idsToDelete);
    toast.promise(pending, {
      pending:"Please wait...."
    });
    const {status, message} = await pending;
    toast[status](message);
    status === 'success' && getTransaction() && setIdsToDelete([]) 
  }
};

  return (
    <>
      <div className="d-flex justify-content-between mt-4 mb-3">
        <div>{displayTran.length} transaction(s) found!</div>
        <div>
          <Form.Control placeholder="Search transaction.." onChange={handleOnSearch} />
        </div>
        <div>
          <Button onClick={() => toggleModal(true)}>
            <FaCirclePlus /> Add Transaction
          </Button>
        </div>
      </div>

      {
        displayTran.length > 0 &&  <Form.Check 
      label="Select All" 
      value="all" 
      onChange={handleOnCheck}
      checked={idsToDelete.length=== displayTran.length}
       />
      }

     

      <Table striped hover className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>In</th>
            <th>Out</th>
          </tr>
        </thead>
        <tbody>
          {displayTran.length > 0 &&
            displayTran.map((tran, i) => (
              <tr key={tran._id}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    label={new Date(tran.createdAt).toLocaleDateString()}
                    value={tran._id}
                    onChange={handleOnCheck}
                    checked={idsToDelete.includes(tran._id) ? true :false}
                  />{" "}
                </td>
                <td>{tran.title}</td>
                <td className="in">
                  {tran.type === "income" ? `$${tran.amount}` : ""}
                </td>
                <td className="out">
                  {tran.type === "expenses" ? `-$${tran.amount}` : ""}
                </td>
              </tr>
            ))}
          <tr className="fw-bold text-end">
            <td colSpan={3}>Total</td>
            <td
              className={balance > 0 ? "text-success" : "text-danger"}
              colSpan={2}
            >
              ${balance}
            </td>
          </tr>
        </tbody>
      </Table>
      {
        idsToDelete.length >0 && <div className="d-grid  mt-3">
        <Button variant="danger" onClick={handleOnDelete}>Delete ({idsToDelete.length}) transactions</Button>
      </div>
      }
      
    </>
  );
};

export default TransactionTable;
