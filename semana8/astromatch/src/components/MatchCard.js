import React from "react";
import "../styles/MatchCard.css";
import loadingScreen from "../assets/loadingScreen.png";

const MatchCard = (props) => {
  return (
    <div
      className="matchCard-container"
      style={{
        background: `url(${props.personImg ? props.personImg : loadingScreen})no-repeat center center fixed`
      }}
    >
      <div className="matchCard-text">
        <h2>{props.matchName && props.matchName}</h2>
        <p> {props.matchDescription && props.matchDescription} </p>
      </div>
    </div>
  );
};

export default MatchCard;
