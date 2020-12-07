import React, { useState, createContext } from "react";

export const TripPageContext = createContext();

export default function TripPageContextProvider(props) {
  const [tripPage, setTripPage] = useState("");

  return (
    <TripPageContext.Provider value={{ tripPage, setTripPage }}>
      {props.children}
    </TripPageContext.Provider>
  );
}
