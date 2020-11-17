import React, { useContext } from "react";
//component
import TripCard from "../components/TripCard";
//styles
import "../styles/home.css";
import { H1 } from "../components/styledComponents/Text";
//context
import { TripsContext } from "../contex/TripsContext";
import { TripPageContext } from "../contex/TripPageContext";
//Routes
import { useHistory } from "react-router-dom";

const Home = () => {
  const { trips } = useContext(TripsContext);
  const { setTripPage } = useContext(TripPageContext);
  const history = useHistory();
  
  function handleDetailsPage(id) {
    const tripDetails = trips.filter((trip) => trip.id === id);
    setTripPage(tripDetails && tripDetails);
    history.push("/TripDetail");
  }

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <H1> What`s New </H1>
        <div className="trips-container">
          {trips !== undefined &&
            trips.map((trip) => (
              <TripCard
                tripName={trip.name}
                onClickDetails={() => handleDetailsPage(trip.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
