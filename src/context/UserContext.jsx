import { createContext, useContext, useState } from "react";
import { fetchTransaction } from "../../helpers/axios";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);

  const [show, setShow] = useState(false);
  const toggleModal = (value) => setShow(value);

  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);



  const getTransaction = async () => {
    const { status, transactions } = await fetchTransaction();
    status === "success" && setTransactions(transactions);

    //making global income, ,expense and balance
    const income = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions.filter(t => t.type === "expenses").reduce((acc, t) => acc + t.amount, 0);
    const balance = income - expense;

    setIncome(income);
    setExpense(expense);
    setBalance(balance);
  };
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        transactions,
        getTransaction,
        toggleModal,
        show,
        balance, 
        income, 
        expense,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
