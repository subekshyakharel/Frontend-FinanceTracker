import { createContext, useContext, useState } from "react";
import { fetchTransaction } from "../../helpers/axios";


export const userContext = createContext();


export const UserProvider = ({children})=>{
    const [user, setUser] = useState({});
    const [transactions, setTransactions] = useState([])

    const [show, setShow] = useState(false);
    const toggleModal = (value)=> setShow(value)

    const getTransaction =async ()=>{
        const {status, transactions, message} =await fetchTransaction();
        status === "success" && setTransactions(transactions)
    }
  return (
     <userContext.Provider value={{user, setUser, transactions, getTransaction, toggleModal, show}}>
        {children}
    </userContext.Provider>
    );
};

export const useUser =()=> useContext(userContext);