import React from "react";
import "./info.css";

const Info = (props) => {
  return (
    <div className="info">
      <img src={props.img} alt="instute image" />
      <div className="textInfo">
        <h4>{props.instName}</h4>
        <p>{props.description}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default Info;
