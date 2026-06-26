import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import "../styles/Transactions.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Transactions() {

  const navigate = useNavigate();


  const [transactions, setTransactions] = useState([]);

const getTransactions = async () =>{
  try{

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/transaction`,
      {
        headers: {
  Authorization: `Bearer ${localStorage.getItem("token")}`
}
      }
    )
    setTransactions(response.data);

  }catch(err){

    console.error(err)
  }
}


  useEffect(() => {
  getTransactions();
}, []);


const deleteTransaction = async(id)=>{
  try{
    // await axios.delete(`http://localhost:5000/api/transaction/${id}`);
    await axios.delete(`${import.meta.env.VITE_API_URL}/transaction/${id}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

    getTransactions()
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
      <AdminNavbar />

      <div className="transaction_container">

        <h2 className="transaction_heading">
          Transactions
        </h2>

        <table className="transaction_table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Price/Unit</th>
              <th>Amount</th>
              <th>Actions</th>
            
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>
  {new Date(transaction.created_at)
    .toLocaleDateString()}
</td>
                <td>{transaction.customer_name}</td>


                <td
                className={
                transaction.type === "Purchase" ? "purchase" : "payment"
                           }
                 >
                {transaction.type}
                </td>
                



                <td>{transaction.item}</td>
                <td>{transaction.quantity}</td>
                <td className="unit_transaction">{transaction.unit}</td>
                <td>{transaction.price === "-" ? "-" : `₹${transaction.price}`}</td>
                <td>₹{transaction.amount}</td>
                <td><button
  className="edit-btn-tran"
  onClick={() =>
    navigate(`/edit-transaction/${transaction.id}`)
  }
>
  Edit
</button>
                <button 
                className="delete-btn-tran"
                onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </>
  );
}