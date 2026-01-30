import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Grocery from "./Grocery";

const Header = () => {
// let btnName = "Login";
//useEffect second arguement- dependency array is not compulsory to use but if it's not used useEffect will re-render everytime a component renders.
// useEffect(()=>{
//     console.log("Header Rendered");
//   }
// ,[]);
const [btnName, setbtnName] = useState("Login");
// console.log("Header Re-Rendered after button clicked");
const onlineStatus = useOnlineStatus();
return (
    <div className="header flex justify-between shadow-lg m-2 bg-pink-200 sm:bg-amber-100 lm lg:bg-blue-100">
      <div className="logo-container"> 
        <img className="w-44" src={LOGO_URL} alt="Food Ordering App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 "><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
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
