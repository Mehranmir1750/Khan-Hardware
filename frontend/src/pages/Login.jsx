import "../styles/Login.css"
import { FaArrowLeft } from "react-icons/fa";

export default function Login(){

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

                    placeholder="Enter username or email"></input>

                    <label>Password</label>
                    <input
                    type="password"
                    placeholder="Enter Password"></input>

                    <button className="login_btn">
    Login
</button>
                    </div>
                    
                </div>
        
        
        
        </>
    )

}