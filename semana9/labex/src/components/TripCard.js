/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { A, H4 } from "./styledComponents/Text";

import "../styles/tripCard.css";
const TripCard = (props) => {
  const random = Math.floor(Math.random() * 10);

  return (
    <div className="tripCard-container" onClick={props.onClickDetails}>
      <img
        src={`https://source.unsplash.com/300x300/?spacex,${random}`}
        alt="Trip Image"
      />
      <H4> {props.tripName} </H4>
      <A > See Details </A>
    </div>
  );
};

export default TripCard;
