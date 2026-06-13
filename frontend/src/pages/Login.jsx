import { useNavigate } from "react-router-dom";
import "../styles/Login.css"
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function Login(){

    const navigate = useNavigate();


    const  [username, setUsername] = useState("");
    const  [password, setPassword] = useState("");
   


    const adminCheck = () => {

        if( 
            (username === "admin@gmail.com" || username === "admin") &&
  password === "1234567890"

        ){
            navigate('/admin-dashboard')
        }
        else{
            alert('enter correct details')
        }

    }



    return(
        <>


         <nav className="admin_navbar">
        
                    
                    <a href="/" className="back_home">
    <FaArrowLeft /> Back
</a>
        
        
                    <h2 className="admin_navbar_heading">Khan Hardware</h2>
                    <span className="admin_address">Near Florence Hospital,Chanapora</span>
                    <span className="admin_contact">Contact: 9797742444</span>
        
                </nav>

                <div className="login_page">
                    <div className="login_container">
                        <h5 className="login_heading">Admin Login</h5>

                    <label>Email/Username</label>
                    <input

                    placeholder="Enter username or email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                     
                     ></input>

                    <label>Password</label>
                    <input
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    onChange={ (e) => setPassword(e.target.value)}></input>

                    <button
                     className="login_btn"
                     onClick={adminCheck}> 
                     Login
                     </button>
                    </div>
                    
                </div>
        
        
        
        </>
    )

}