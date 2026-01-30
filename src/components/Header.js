import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
const Header = () => {

// let btnName = "Login";
//useEffect second arguement- dependency array is not compulsory to use but if it's not used useEffect will re-render everytime a component renders.
 
// useEffect(()=>{
//     console.log("Header Rendered");
//   }
// ,[]);

const [btnName, setbtnName] = useState("Login");
console.log("Header Re-Rendered after button clicked");
return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food Ordering App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
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
