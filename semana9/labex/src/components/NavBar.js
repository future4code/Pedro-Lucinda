import React, { useContext, useState } from "react";
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
//router
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const { userId } = useContext(UserContext);

  const [searchInp, setSearchInp] = useState("");

  const history = useHistory();

  return (
    <div className="navBar-container">
      <Link to={`/`}>
        <img id="logo" src={logo} alt="LabeX" />{" "}
      </Link>

      <div className="navBar-search">
        <input
          id="search"
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
          placeholder="Search..."
        />
        <Icon src={searchIcon} alt="Search" onClick={() => {
          setSearchInp('Search...')
          history.push("/")}
          } />
      </div>

      <div className="navBar-menu">
        <Link to={`/`}>
          <H4> Trips </H4>
        </Link>

        <Link to={`/Login`}>
          <H4> Login </H4>
        </Link>

        {userId && (
          <>
            <Link to={`/CreateTrip/${userId}`}>
              <H4> Create </H4>
            </Link>

            <Link to={`/Candidates/${userId}`}>
              <H4> Candidates </H4>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
