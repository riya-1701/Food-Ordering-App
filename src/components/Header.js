import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
const Header = () => {

// let btnName = "Login";

const [btnName, setbtnName] = useState("Login");
console.log("Header Re-Rendered after button clicked");
return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food Ordering App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            // console.log(btnName);
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
