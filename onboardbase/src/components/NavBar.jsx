import React from "react";
import mic from "../assets/images/mic.png";

function NavBar() {
  return (
    <div className="navBar">
      <img src={mic} alt="" />
      <p>Big news! We're excited to announce we acquired Buck.</p>
    </div>
  );
}

export default NavBar;
