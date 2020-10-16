import React from "react";
import "./nav.css";

import home from "../../img/home.svg";
import logo from "../../img/labegram-logo.svg";
import location from "../../img/compass.svg";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import share from "../../img/share-outline.svg";
import profilePic from "../../img/pedro.jpg";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-view">
          <img src={logo} className="logo" />

          <input type="text" placeholder="Search" />
          <div className="iconsNav">
            <img src={home} />
            <img src={share} />
            <img src={location} />
            <img src={iconeCoracaoBranco} />
            <img src={profilePic} className="profilePic" />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
