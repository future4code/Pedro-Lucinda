import React from "react";
import "../styles/navbar.css";
import "../styles/mobile.css";

import cartIcon from "../imgs/cartIcon.svg";
import logo from "../imgs/spacetoysLogo.svg";

const NavBar = (props) => {
  return (
    <div className="navBarWrapper">
      <div className="navBarContainer">
        <img className="logo" src={logo} alt="Logo" />
        <img
          className="cartBtn"
          src={cartIcon}
          onClick={props.onClickShowCart}
          alt="CartIcon"
        />
      </div>
    </div>
  );
};

export default NavBar;
