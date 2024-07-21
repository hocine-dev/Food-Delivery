import "./Navbar.css"
import assets from "../../assets/assets"
const Navbar = () => {
  return (
    <div>
        <img src={assets.logo} alt="Logo" className="logo" />
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
        </ul>
        <ul className="navbar-right">
            <img src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket" />

            </div>
        </ul>
    </div>
  )
}

export default Navbar