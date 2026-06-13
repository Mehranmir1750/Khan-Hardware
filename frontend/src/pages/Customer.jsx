// import AdminNavbar from "../components/AdminNavbar"
// import "../styles/Customer.css"

// export default function Customer(){

//     const customers = [
//   {
//     name: "Abdul Rahman",
//     phone: "9541771220",
//     address: "Chanapora",
//     amount: 12500
//   },
//   {
//     name: "Rashid Ahmad",
//     phone: "7006123456",
//     address: "Hyderpora",
//     amount: -5000
//   }
// ];


//     return(
//         <>

//         <AdminNavbar/>

//         <table>
//     <thead>
//         <tr>
//             <th>Customer Name</th>
//             <th>Phone Number</th>
//             <th>Address</th>
//             <th>Amount</th>
//             <th>Actions</th>
//         </tr>
//     </thead>

//     <tbody>
//   {customers.map((customer, index) => (
//     <tr key={index}>
//       <td>{customer.name}</td>
//       <td>{customer.phone}</td>
//       <td>{customer.address}</td>
//       <td>₹{customer.amount}</td>
//       <td>
//   <button>View</button>
//   <button>Edit</button>
// </td>
//     </tr>
//   ))}
// </tbody>
// </table>

        




        
//         </>
//     )
// }

import AdminNavbar from "../components/AdminNavbar";
import "../styles/Customer.css";

export default function Customer() {

  const customers = [
    {
      name: "Abdul Rahman",
      phone: "9541771220",
      address: "Chanapora",
      amount: 12500
    },
    {
      name: "Rashid Ahmad",
      phone: "7006123456",
      address: "Hyderpora",
      amount: -5000
    }
  ];

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

                <td
                  className={
                    customer.amount >= 0
                      ? "positive_amount"
                      : "negative_amount"
                  }
                >
                  ₹{customer.amount}
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