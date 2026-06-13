import AdminNavbar from "../components/AdminNavbar"
import "../styles/AddCustomer.css"


export default function AddCustomer(){
    return(
        <>

        <AdminNavbar/>


        <div className="user_add_container">

            <h2 className="form_heading">
        Add Customer
    </h2>

            <label>Customer Name</label>
            <input 
            placeholder="Enter customer's name"
            ></input>

            <label>Customer Phone Number</label>
            <input 
            placeholder="Enter customer's Phone Number"
            ></input>

            <label>Customer Address</label>
            <input 
            placeholder="Enter customer's Address"
            ></input>

            <button className="create-user-btn">Add User</button>

        </div>
        
        </>
    )
}