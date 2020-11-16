import React from "react";
import { H1, H4, P } from "../components/styledComponents/Text";
import { SendBtn } from "../components/styledComponents/Buttons";
import '../styles/tripDetail.css'

const TripDetail = () => {
  return (
    <div className="tripDetail-container">
      <div className="tripDetail-img">
        <img src="#" alt="Trip Image" />
      </div>

      <div className="tripDetail-text">
        <H1> Trip Name </H1>
        <H4> Planet: </H4>
        <P> Mars </P>

        <H4> Date </H4>
        <P> 25/04/2021 </P>

        <H4> Description: </H4>
        <P> Lorem dsauhhudsadsahdsai </P>
        <SendBtn> Apply </SendBtn>
      </div>
    </div>
  );
};

export default TripDetail;
