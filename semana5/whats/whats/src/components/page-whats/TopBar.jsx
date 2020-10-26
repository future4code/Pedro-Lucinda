import React from "react";
import "./topbar.css";

import searchIcon from "../../img/search.svg";
import user from "../../img/pedro.jpg";

const TopBar = (props) => {
  return (
    <div className="topBar">
      <div className="user">
        <img src={user} className="person" />
        <p> {props.name} </p>
      </div>
      <img src={searchIcon} className="searchIcon" />
    </div>
  );
};

export default TopBar;
