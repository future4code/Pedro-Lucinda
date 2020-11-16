import React from "react";
import {A, H4} from './styledComponents/Text'


import '../styles/tripCard.css'
const TripCard = () => {
  return (
    <div className="tripCard-container">
      <img src="#" alt="Trip Image" />
      <H4> Trip Name </H4>
      <A> See Details </A>
    </div>
  );
};

export default TripCard;
