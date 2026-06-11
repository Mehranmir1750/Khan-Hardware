import Navbar from "./Navbar";
import "../styles/Details.css"


export default function Details(
    // {detail}
){

      const detail = [
        {
          date: '12/05/2026',
    item: "Iron Nails",
    quantity: 4,
    price: 300
        },
         {
          date: '04/06/2026',
    item: "Pipe",
    quantity: 2,
    price: 800
        },
         {
          date: '11/06/2026',
    item: "Hammer",
    quantity: 1,
    price: 500
        }
      ]


      const balance = detail.reduce(
        (sum,item) => sum + item.price * item.quantity, 0
        
      )
    return (
        <>

        <Navbar/>

        <div className="detail_component">
  <h2 className="detail_heading">Purchase Details</h2>

  <table className="details_table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>

    <tbody>
  {detail.map((item, index) => (
    <tr key={index}>
      <td>{item.date}</td>
      <td>{item.item}</td>
      <td>{item.quantity}</td>
      <td>₹{item.price}</td>
      <td>₹{item.price * item.quantity}</td>
    </tr>
  ))}

  <tr>
    <td colSpan="4">
      <strong>Paid Amount</strong>
    </td>
    <td>₹1000</td>
  </tr>

  <tr>
    <td colSpan="4">
      <strong>Outstanding Balance</strong>
    </td>
    <td>₹{balance - 1000}</td>
  </tr>
</tbody>

  </table>
</div>
        
        
        
        
        </>
    )

}