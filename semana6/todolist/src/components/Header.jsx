import React from "react";
import { ImgMorning, ImgAfternoon, ImgNight } from "../styles/styled";

// import morning from "../imgs/morning.jpg";
// import afternoon from "../imgs/afternoon.jpg";
// import night from "../imgs/night.jpg";

const Header = () => {
  const headerImg = () => {
    // get the date
    let d = new Date();
    let clientTimezoneOffset = d.getHours();

    console.log(clientTimezoneOffset);

    // make a condition to show a certain img
    if (clientTimezoneOffset) {
      if (clientTimezoneOffset < 12) {
        return <ImgMorning />;
      } else if (clientTimezoneOffset >= 12 && clientTimezoneOffset <= 18) {
        return <ImgAfternoon />;
      } else {
        return <ImgNight />;
      }
    } else {
      return <ImgNight />;
    }
  };

  return <div className="head">{headerImg()}</div>;
};

export default Header;
