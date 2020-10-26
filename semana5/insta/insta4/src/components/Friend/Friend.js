import React from "react";
import "./friend.css";

class Friend extends React.Component {
  render() {
    return (
      <div className="friend">
        <img src={this.props.img} alt="Friend" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Friend;
