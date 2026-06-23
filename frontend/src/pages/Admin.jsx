import AdminNavbar from "../components/AdminNavbar";
import "../styles/Admin.css"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin(){

  const [stats, setStats] = useState({
  totalCustomers: 0,
  totalDue: 0,
  todaySales: 0
});

const [loading, setLoading] = useState(true);

const [recentTransactions, setRecentTransactions] = useState([]);


const getRecentTransactions = async () => {

  try {

    const response = await axios.get(
      "http://localhost:5000/api/dashboard/recent",
      {
        headers: {
  Authorization: `Bearer ${localStorage.getItem("token")}`
}
      }
    );

    setRecentTransactions(response.data);

  } catch (err) {

    console.error(err);

  }

};



const getDashboardData = async () => {

  try {

    const response = await axios.get(
      "http://localhost:5000/api/dashboard"
    );

    setStats(response.data);

  } catch (err) {

    console.error(err);

  }

};

useEffect(() => {
  getDashboardData();
  getRecentTransactions();
}, []);
    return(
        <>
        <AdminNavbar/>

        {/* <div className="dashboard_cards"> */}

  {/* <div className="card">
    <h4>Total Customers</h4>
    <p>{stats.totalCustomers}</p>
  </div> */}

  {/* <div className="card">
    <h4>Total Due</h4>
    <p>₹{stats.totalDue}</p>
  </div> */}

  {/* <div className="card">
    <h4>Today's Sales</h4>
    <p>₹{stats.todaySales}</p>
  </div>

</div> */}


<div className="table_container">
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Customer</th>
        <th>Type</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
  {recentTransactions.length === 0 ? (
    <tr>
      <td colSpan="4">
        No Transactions Found
      </td>
    </tr>
  ) : (
    recentTransactions.map((transaction) => (
      <tr key={transaction.id}>
        <td>
          {new Date(transaction.created_at)
            .toLocaleDateString()}
        </td>

        <td>{transaction.customer_name}</td>

        <td
  className={
    transaction.type === "Purchase"
      ? "purchase"
      : "payment"
  }
>
  {transaction.type}
</td>

        <td>₹{transaction.amount}</td>
      </tr>
    ))
  )}
</tbody>
  </table>
</div>
        
        </>
    )
}