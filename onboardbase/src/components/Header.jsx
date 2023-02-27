import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <div className="buttons">
        <button className="btn1">Login</button>
        <button className="btn2">Try now</button>
      </div>
    </div>
  );
}

export default Header;
