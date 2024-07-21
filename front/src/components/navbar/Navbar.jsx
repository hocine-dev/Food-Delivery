import "./Navbar.css"
import assets from "../../assets/assets"
import { useState } from "react"
const Navbar = () => {

    const [Menu, setMenu] = useState("home")
  return (
    <div className="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>{setMenu('home')}} className={Menu === "home"?"active":""}>Home</li>
            <li onClick={()=>{setMenu('menu')}} className={Menu === "menu"?"active":""}>Menu</li>
            <li onClick={()=>{setMenu('Mobile App')}} className={Menu === "Mobile App"?"active":""}>Mobile App</li>
            <li onClick={()=>{setMenu('Contact Us')}} className={Menu === "Contact Us"?"active":""}>Contact Us</li>
        </ul>
        <ul className="navbar-right">
            <img src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket" />
            <div className="dot"></div>
            </div>
            <button>Sign in</button>

           
        </ul>
    </div>
  )
}

export default Navbar