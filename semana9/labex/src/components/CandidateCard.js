import React from "react";
import { P, H4 } from "./styledComponents/Text";
import { AcceptBtn, IgnoretBtn } from "./styledComponents/Buttons";
import '../styles/candidateCard.css'

const CandidateCard = (props) => {
  return (
    <div className="candidate-card">
      <H4> {props.name} </H4>
      <P> {props.age} </P>
      <P>
        <strong> {props.trip} </strong>
      </P>
      <P> {props.country} </P>
      <P> {props.profession} </P>
      <P> {props.description} </P>
			<div className="cadidateCard-btns">
      <AcceptBtn onClick={props.onClickAccept}> Accept </AcceptBtn>
      <IgnoretBtn onClick={props.onClickIgnore} > Ignore </IgnoretBtn>

			</div>
    </div>
  );
};

export default CandidateCard;
