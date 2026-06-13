import "../styles/AdminNavbar.css"

export default function AdminNavbar(){
    return(
    <>

    <div className="left_navbar">
        <h4 className="adminlogo">KH</h4>

    <a href="/admin">Dashboard</a>
    <a href="/customers">Customers</a>
    <a href="/transactions">Transactions</a>
    <a href="/add-customer">Add Customer</a>
        <a href="/logout" className="logout">Log out</a>
    </div>

<div className="top_navbar">
    <h3 className="admin_heading">
        Khan Hardware Admin
    </h3>

    <input
        className="admin_search"
        type="text"
        placeholder="Search number or name"
    />
</div>

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