import React from "react";
import Friend from "../Friend/Friend";
import "./friendsBar.css";

import john from "../../img/john.jpg";
import jony from "../../img/Jony.jpg";
import jerry from "../../img/Jerry.jpg";
import nathy from "../../img/Nathy.jpg";
import amanda from "../../img/Amanda.jpg";

class FriendsBar extends React.Component {
  render() {
    return (
      <div className="friendsBar">
        <Friend img={john} name="John" />
        <Friend img={jony} name="Jony" />
        <Friend img={nathy} name="Nathy" />
        <Friend img={jerry} name="Jerry" />
        <Friend img={amanda} name="Amanda" />
      </div>
    );
  }
}

export default FriendsBar;
