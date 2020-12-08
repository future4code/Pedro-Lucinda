import React, { useContext } from "react";
//component
import TripCard from "../components/TripCard";
import NavBar from "../components/NavBar";
//styles
import "../styles/home.css";
import { H1 } from "../components/styledComponents/Text";
//context
import { TripsContext } from "../contex/TripsContext";
import { TripPageContext } from "../contex/TripPageContext";
//Routes
import { useHistory } from "react-router-dom";
//services
import api from "../services/api";

const Home = () => {
  const { trips } = useContext(TripsContext);
  const { setTripPage } = useContext(TripPageContext);

  const history = useHistory();

  function handleDetailsPage(trip) {
    setTripPage(trip);
    api
      .get(`/trip/${trip.id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setTripPage(response.data.trip);
        history.push("/TripDetail");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <NavBar />
      <div className="home-wrapper">
        <div className="home-container">
          <H1> What`s New </H1>
          <div className="trips-container">
            {trips !== undefined &&
              trips.map((trip) => (
                <TripCard
                  key={trip.id}
                  tripName={trip.name}
                  onClickDetails={() => handleDetailsPage(trip)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
