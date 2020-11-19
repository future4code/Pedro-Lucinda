import React, { useContext } from "react";
//component
import TripCard from "../components/TripCard";
import NavBar from "../components/NavBar"
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

  function handleDetailsPage(id) {
    api
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/caio-dumont/trip/3Ga6Stvj6B687TNgFK72",
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTripPage(res.data.trip);
        history.push("/TripDetail");
        console.log(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(trips);

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
                  onClickDetails={() => handleDetailsPage(trip.id)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
