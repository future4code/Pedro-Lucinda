import React from "react";
import "./box.css";
import Info from "../Info/info";

import estacio from "../../imgs/estacio.png";
import labenu from "../../imgs/labenu.png";
import pucrs from "../../imgs/pucrs.jpeg";

const Box = (props) => {
  return (
    <div className="box">
      <h3>{props.title}</h3>
      <Info
        img={labenu}
        instName="Labenu"
        description="Full Stack Web Development"
        year="2020.2 - 2021.1"
      />

      <Info
        img={estacio}
        instName="Estacio de Sa"
        description="Engenharia de Software"
        year="2020 - 2024"
      />
      <Info
        img={pucrs}
        instName="PUCRS"
        description="Psicologia"
        year="2014 - 2017"
      />
    </div>
  );
};

export default Box;
