import React from "react";
import logo from "../assets/labexLogo.svg";
import searchIcon from "../assets/search.svg";
import "../styles/navBar.css";
import { Icon } from "./styledComponents/Icons";
import { H4 } from "./styledComponents/Text";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar-container">
      <Link to="/">
        <img id="logo" src={logo} alt="LabeX" />{" "}
      </Link>

      <div className="navBar-search">
        <input
          id="search"
          value="Search..."
          onChange="onChangeSearchValue"
          placeholder="Search..."
        />
        <Icon src={searchIcon} alt="Search" />
      </div>

      <div className="navBar-menu">
        <Link to="/">
          <H4> Trips </H4>
        </Link>

        <Link to="/Login">
          <H4> Login/Register </H4>
        </Link>

        <Link to="/CreateTrip">
          <H4> Create </H4>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
