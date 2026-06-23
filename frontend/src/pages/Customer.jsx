import AdminNavbar from "../components/AdminNavbar";
import "../styles/Customer.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Customer() {

  const [customers, setCustomers] = useState([]);


  const getCustomers = async () =>{
    try{

      const response = await axios.get(
        "http://localhost:5000/api/customers",
         {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }
      )
      setCustomers(response.data);

    }catch(err){
      console.error(err);

    }
  }

  useEffect(() => {
  getCustomers();
}, []);

  return (
    <>
      <AdminNavbar />

      <div className="customer_container">

        <h2 className="customer_heading">
          Customers
        </h2>

        <table className="customer_table">

          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>

                <td>{customer.name}</td>

                <td>{customer.phone}</td>

                <td>{customer.address}</td>

                {/* <td
                  className={
                    customer.balance >= 0
                      ? "positive_amount"
                      : "negative_amount"
                  }
                >
                  {customer.balance}
                </td> */}
                <td
  className={
    customer.balance >= 0
      ? "positive_amount"
      : "negative_amount"
  }
>
  {customer.balance >= 0
    ? `₹${customer.balance}`
    : `Advance ₹${Math.abs(customer.balance)}`}
</td>
                

                <td className="action_buttons">

                  <button className="view_btn">
                    View
                  </button>

                  <button className="edit_btn">
                    Edit
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </>
  );
}