import "../styles/Navbar.css"
import { FaUserShield } from "react-icons/fa";

export default function Navbar(){
    return (
        <>

        <nav className="user_navbar">

            <a href="/login" className="Login-icon">
            <FaUserShield/>
            </a>


            <h2 className="user_navbar_heading">Khan Hardware</h2>
            <span className="address">Near Florence Hospital,Chanapora</span>
            <span className="contact">Contact: 9797742444</span>

        </nav>
        
        
        </>
    )
}