import Navbar from "./Navbar";
import "../styles/Details.css"


export default function Details(
    // {detail}
){

      const detail = {
    item: "Iron Nails",
    quantity: 4,
    price: 300
  };
    return (
        <>

        <Navbar/>

        <div className="detail_component">


             <h6 className="item_details">
  <strong>Date</strong> {detail?.date}
</h6>
            

            <h6 className="item_details">
  <strong>Item</strong> {detail?.item}
</h6>

<h6 className="item_details">
  <strong>Quantity</strong> {detail?.quantity}
</h6>

<h6 className="item_details">
  <strong>Price</strong> ₹{detail?.price}
</h6>
<h6 className="item_details">
  <strong>Total</strong> ₹{detail?.price*detail?.quantity}
</h6>
        </div>
        
        
        
        
        </>
    )

}