import React, { useContext } from "react";
//assets
import logo from "../assets/labexLogo.svg";
import searchIcon from "../assets/search.svg";
//styles
import "../styles/navBar.css";
import { Icon } from "./styledComponents/Icons";
import { H4 } from "./styledComponents/Text";
import { Link } from "react-router-dom";
//context
import { UserContext } from "../contex/UserContext";

const NavBar = () => {
  const { userId } = useContext(UserContext);

  return (
    <div className="navBar-container">
      <Link to={`/home/${userId}`}>
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
        <Link to={`/home/${userId}`}>
          <H4> Trips </H4>
        </Link>

        <Link to="/CreateTrip">
          <H4> Create </H4>
        </Link>

        <Link to="/Candidates">
          <H4> Candidates </H4>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
