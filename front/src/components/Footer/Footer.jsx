import assets from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
    <div className="three-columns">
    <div className="left">
        <img src={assets.logo} alt="logo" />
        <p>Food Delivery App</p>
        <div className="social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
        </div>
      </div>
      <div className="center">
        <h2>Food Delivery App</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="right">
        <h2>Get In Touche</h2>
        <ul>
            <li>0553678909</li>
            <li>Contact@delevryapp.com</li>
        </ul>
      </div>
    </div>
      <hr />
      <p className="copy">Made By<a href="http://hocinedev.fr/" target="_blank">Hocine Dev</a> 2024 all right reserved</p>
    </div>
  );
};

export default Footer;
