/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from "react";
//styles
import { H1, H4, P } from "../components/styledComponents/Text";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/tripDetail.css";
//context
import { TripPageContext } from "../contex/TripPageContext";
import { ApplyIdContext } from "../contex/ApplyIdContext";
//Routes
import { useHistory } from "react-router-dom";
//components
import NavBar from "../components/NavBar";

const TripDetail = () => {
  const { tripPage } = useContext(TripPageContext);
  const { setApplyId } = useContext(ApplyIdContext);

  const history = useHistory();

  function handleGoToApply(id) {
    setApplyId(id);
    return history.push(`/Apply`);
  }

  return (
    <>
      <NavBar />
      <div className="tripDetail-container">
        <div className="tripDetail-img">
          <img
            src={`https://source.unsplash.com/492x492/?${tripPage.planet},space`}
            alt="Trip Image"
          />
        </div>

        <div className="tripDetail-text">
          <H1> {tripPage.name} </H1>
          <H4> Planet: </H4>
          <P> {tripPage.planet} </P>

          <H4> Date: </H4>
          <P> {tripPage.date} </P>

          <H4> Description: </H4>
          <P> {tripPage.description} </P>
          <SendBtn onClick={() => handleGoToApply(tripPage.id)}>Apply</SendBtn>
        </div>
      </div>
    </>
  );
};

export default TripDetail;
