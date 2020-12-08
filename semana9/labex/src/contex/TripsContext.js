import React, { useState, useEffect, createContext } from "react";
import api from "../services/api";

export const TripsContext = createContext();

export default function TripsContextProvider(props) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    api
      .get("/trips")
      .then((response) => setTrips(response.data.trips))
      .catch((error) => console.log(error));
  }, []);

  return (
    <TripsContext.Provider value={{ trips, setTrips }}>
      {props.children}
    </TripsContext.Provider>
  );
}
