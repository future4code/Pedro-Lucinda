import React from "react";
import "./profileIntro.css";
import "../../App.css";

import person from "../../imgs/pedro-foto.jpg";
import capa from "../../imgs/capaLabenu.jpg";

const ProfileIntro = () => {
  return (
    <div className="profileIntro">
      <img className="bg" src={capa} />

      <img className="person" src={person} />
      <h1> Pedro Martins Lucinda </h1>
      <p>Software Engineer Student / Studying Full Stack Web Development</p>
      <p className="city"> Porto Alegre, RS </p>
      <p className="connections"> 239 Connections </p>
    </div>
  );
};

export default ProfileIntro;
