
import AdminNavbar from "../components/AdminNavbar";
import { useNavigate } from "react-router-dom";
import "../styles/AddTransaction.css"
import axios from "axios";
import { useState, useEffect } from "react";

export default function AddTransaction() {

  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Purchase");
  const [amountPaid, setAmountPaid] = useState("");

  const amount = (Number(quantity) || 0) * (Number(price) || 0);
  const navigate = useNavigate();


  const getCustomers = async () => {
  try {

    const response = await axios.get(
      "http://localhost:5000/api/customers"
    );

    setCustomers(response.data);

  } catch (err) {

    console.error(err);

  }
};




  const addTransactions = async () => {

    try{

      // const response = await axios.post(
      //   "http://localhost:5000/api/transaction",{
      //     customer,
      //     type,
      //     item,
      //     quantity,
      //     price,
      //     amount: type === "Payment"
      // ? amountPaid
      // : amount
      //   }

      // );

      await axios.post(
  "http://localhost:5000/api/transaction",
  {
    customer,
    type,
    item: type === "Payment" ? null : item,
    quantity: type === "Payment" ? null : quantity,
    price: type === "Payment" ? null : price,
    amount: type === "Payment" ? amountPaid : amount
  }
);
      alert("Transaction added")
      setCustomer("")
      setItem("")
      setAmountPaid("")
      setType("")
      setQuantity("")

    }catch(err){
      console.error(err);

        alert("Failed to add transaction");

    }
  }


  useEffect(() => {
  getCustomers();
}, []);

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
  <option value="">
    Select Customer
  </option>

  {customers.map((customer) => (
    <option
      key={customer.id}
      value={customer.id}
    >
      {customer.name}
    </option>
  ))}
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

        <button
        onClick={addTransactions}>
          Create Transaction
        </button>

      </div>
    </>
  );
}