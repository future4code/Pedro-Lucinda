import React from "react";
import logo from "../../imgs/linkedin.png";
import "./nav.css";
import "../../App.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="searchBox">
        <img src={logo} />
        <input type="text" placeholder="Search" />
      </div>

      <ul>
        <li>Home</li>
        <li>Network</li>
        <li>Messaging</li>
        <li>Notifications</li>
        <li>Me</li>
      </ul>
    </div>
  );
};

export default Nav;
