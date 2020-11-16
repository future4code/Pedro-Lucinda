import React from "react";
import TripCard from "../components/TripCard";
import "../styles/home.css";
import { H1 } from "../components/styledComponents/Text";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <H1> What`s New </H1>
        <div className="trips-container">
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
