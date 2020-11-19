import React, { useState, useContext } from "react";
//services
import api from "../services/api";
//style
import { H1 } from "../components/styledComponents/Text";
//components
import NavBar from "../components/NavBar";
import CandidateCard from "../components/CandidateCard";
//context
import { CadidatesContext } from "../contex/CadidatesContext";

const Candidates = () => {
  const { candidatesArr } = useContext(CadidatesContext);

  console.log(candidatesArr);

  return (
    <>
      <NavBar />
      <div className="candidates-container">
        <H1> Candidates </H1>
        <div className="candidates">
          {candidatesArr !== undefined
            ? candidatesArr.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  name={candidate.name}
                  age={candidate.age}
                  trip={candidate.trip}
                  country={candidate.country}
                  profession={candidate.profession}
                  description={candidate.description}
                />
              ))
            : "No candidates at this time :/"}
        </div>
      </div>
    </>
  );
};

export default Candidates;
