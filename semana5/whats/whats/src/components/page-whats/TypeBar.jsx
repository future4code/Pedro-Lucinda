import React from "react";

import sendIcon from "../../img/sendIcon.svg";
import faceIcon from "../../img/iconFace.svg";

const TypeBar = (props) => {
  return (
    <div className="typeBar">
      <img src={faceIcon} className="typeBar-Icon" />

      <input
        type="text"
        placeholder="Name"
        className="nameInp"
        onChange={props.onChangeName}
        value={props.valueName}
      />

      <input
        type="text"
        placeholder="Write a message..."
        className="textInp"
        onChange={props.onChangeMessage}
        value={props.valueMessage}
      />

      <button className="sendBtn" onClick={props.click}>
        <img src={sendIcon} className="sendIcon" />
      </button>
    </div>
  );
};

export default TypeBar;
