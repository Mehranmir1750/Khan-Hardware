import { useState } from "react";
import axios from "axios";

import AdminNavbar from "../components/AdminNavbar"
import "../styles/AddCustomer.css"


export default function AddCustomer(){


    const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");


const addCustomer = async () =>{

    try{

        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/customers`,
            {
                name, 
                phone,
                address
            },
            {
                headers: {
  Authorization: `Bearer ${localStorage.getItem("token")}`
}
            }
        );
        alert("Customer Added Sucessfully");

        console.log(response.data);

        setName("");
        setPhone("");
        setAddress("");
        
    } catch(err){
        console.error(err);

        alert("Failed to add customer");
        }
};


    return(
        <>

        <AdminNavbar/>


        <div className="user_add_container">

            <h2 className="form_heading">
        Add Customer
    </h2>

            <label>Customer Name</label>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter customer's name"
            ></input>

            <label>Customer Phone Number</label>
            <input 
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            placeholder="Enter customer's Phone Number"
            ></input>

            <label>Customer Address</label>
            <input 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter customer's Address"
            ></input>

            <button 
            className="create-user-btn"
            onClick={addCustomer}
            
            >Add User</button>

        </div>
        
        </>
    )
}