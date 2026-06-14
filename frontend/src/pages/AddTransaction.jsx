import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { useNavigate } from "react-router-dom";
import "../styles/AddTransaction.css"
export default function AddTransaction() {

  const [customer, setCustomer] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Purchase");
  const [amountPaid, setAmountPaid] = useState("");

  const amount = (Number(quantity) || 0) * (Number(price) || 0);
  const navigate = useNavigate();

  return (
    <>
      <AdminNavbar />

      <div className="transaction_form">

        <h2>Add Transaction</h2>

        <label>Customer</label>
        <select
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        >
          <option value="">Select Customer</option>
          <option value="Abdul Rahman">Abdul Rahman</option>
          <option value="Rashid Ahmad">Rashid Ahmad</option>
          

        </select>
        <button
  className="add_customer_btn"
  onClick={() => navigate("/add-customer")}
>
  + Add New Customer
</button>


       
       <select
  value={type}
  onChange={(e) => setType(e.target.value)}
>
  <option value="Purchase">Purchase</option>
  <option value="Payment">Payment</option>
</select>


       
       {type === "Purchase" && (
  <>
    <label>Item</label>
    <input
      placeholder="Enter Item"
      value={item}
      onChange={(e) => setItem(e.target.value)}
    />

    <label>Quantity</label>
    <input
      type="number"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
    />

    <label>Price</label>
    <input
      type="number"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />

    <label>Amount</label>
    <input
      value={amount}
      readOnly
    />
  </>
)}
{type === "Payment" && (
  <>
    <label>Amount Paid</label>
    <input
      type="number"
      value={amountPaid}
      onChange={(e) => setAmountPaid(e.target.value)}
    />
  </>
)}

        <button>
          Create Transaction
        </button>

      </div>
    </>
  );
}