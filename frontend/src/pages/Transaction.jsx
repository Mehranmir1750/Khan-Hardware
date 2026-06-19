import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import "../styles/Transactions.css";
import { useState, useEffect } from "react";

export default function Transactions() {


  const [transactions, setTransactions] = useState([]);

const getTransactions = async () =>{
  try{

    const response = await axios.get(
      "http://localhost:5000/api/transaction"
    )
    setTransactions(response.data);

  }catch(err){

    console.error(err)
  }
}


  useEffect(() => {
  getTransactions();
}, []);

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
              <th>Price</th>
              <th>Amount</th>
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
                <td>{transaction.price === "-" ? "-" : `₹${transaction.price}`}</td>
                <td>₹{transaction.amount}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </>
  );
}