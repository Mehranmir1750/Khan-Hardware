import Navbar from "../components/Navbar";
import "../styles/Details.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



export default function Details() {

  const [transaction, setTransactions] = useState([]);

const { id } = useParams();




const getTransactions = async () => {

  try {

    const response = await axios.get(
      `http://localhost:5000/api/transaction/customer/${id}`
    );

    setTransactions(response.data);

  } catch (err) {

    console.error(err);

  }

};

useEffect(() => {
  getTransactions();
}, []);





  // const balance = transactions.reduce((sum, transaction) => {

  //   if (transaction.type === "purchase") {
  //     return sum + transaction.price * transaction.quantity;
  //   }

  //   return sum - transaction.amount;

  // }, 0);

  const balance = transaction.reduce(
  (sum, transaction) => {

    if (transaction.type === "Purchase") {
      return sum + Number(transaction.amount);
    }

    return sum - Number(transaction.amount);

  },
  0
);

  return (
    <>
      <Navbar />

      <div className="detail_component">

        <h2 className="detail_heading">
          Customer Ledger
        </h2>

        <table className="details_table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>

            {transaction.map((transaction, index) => (

              <tr key={index}>

                {/* <td>{transaction.date}</td> */}
                <td>
  {new Date(transaction.created_at)
    .toLocaleDateString()}
</td>

                {transaction.type === "Purchase" ? (
                  <>
                    <td>{transaction.item}</td>
                    <td>{transaction.quantity}</td>
                    <td>₹{transaction.price}</td>
                    <td>
                      ₹{transaction.quantity * transaction.price}
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <strong>Payment Received</strong>
                    </td>
                    <td>-</td>
                    <td>-</td>
                    <td style={{ color: "green" }}>
                      -₹{transaction.amount}
                    </td>
                  </>
                )}

              </tr>

            ))}

            {/* <tr>
              <td colSpan="4">
                <strong>Outstanding Balance</strong>
              </td>

              <td>
                <strong>
                  ₹{balance}
                </strong>
              </td>
            </tr> */}

            <tr>
  <td colSpan="4">
    <strong>
      {balance >= 0
        ? "Outstanding Balance"
        : "Advance Balance"}
    </strong>
  </td>

  <td>
    <strong
      style={{
        color:
          balance >= 0
            ? "#dc2626"
            : "#16a34a"
      }}
    >
      ₹{Math.abs(balance)}
    </strong>
  </td>
</tr>

          </tbody>

        </table>

      </div>
    </>
  );
}