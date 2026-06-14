import AdminNavbar from "../components/AdminNavbar";
import "../styles/Transactions.css";

export default function Transactions() {

  const transactions = [
    {
      date: "12/06/2026",
      customer: "Abdul Rahman",
      type: "Purchase",
      item: "Iron Nails",
      quantity: 4,
      price: 300,
      amount: 1200
    },
    {
      date: "13/06/2026",
      customer: "Rashid Ahmad",
      type: "Payment",
      item: "-",
      quantity: "-",
      price: "-",
      amount: 1000
    }
  ];

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
                <td>{transaction.date}</td>
                <td>{transaction.customer}</td>
                <td>{transaction.type}</td>
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