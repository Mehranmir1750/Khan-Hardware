import AdminNavbar from "../components/AdminNavbar";
import "../styles/Admin.css"

export default function Admin(){
    return(
        <>
        <AdminNavbar/>

        <div className="dashboard_cards">

  <div className="card">
    <h4>Total Customers</h4>
    <p>120</p>
  </div>

  <div className="card">
    <h4>Total Due</h4>
    <p>₹1,25,000</p>
  </div>

  <div className="card">
    <h4>Today's Sales</h4>
    <p>₹12,500</p>
  </div>

</div>


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
  </table>
</div>
        
        </>
    )
}