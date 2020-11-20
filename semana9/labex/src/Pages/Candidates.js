import React, { useContext } from "react";
//style
import { H1 } from "../components/styledComponents/Text";
import "../styles/candidates.css";
//components
import NavBar from "../components/NavBar";
import CandidateCard from "../components/CandidateCard";
//context
import { CadidatesContext } from "../contex/CadidatesContext";

const Candidates = () => {
  const { candidatesArr, setCandidates } = useContext(CadidatesContext);

  function handleAccept(id) {
    const newArr = [...candidatesArr];
    const removeCand = newArr.filter((cand) => cand.id === id);
    newArr.splice(removeCand[0], 1);
    setCandidates(newArr);
  }

  function handleIgnore(id) {
    const newArr = [...candidatesArr];
    const removeCand = newArr.filter((cand) => cand.id === id);
    newArr.splice(removeCand[0], 1);
    setCandidates(newArr);
  }

  return (
    <>
      <NavBar />
      <div className="candidates-container">
        <H1> Candidates </H1>
        <div className="candidates">
          {candidatesArr.length > 0 ? (
            candidatesArr.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                name={candidate.name}
                age={candidate.age}
                trip={candidate.trip}
                country={candidate.country}
                profession={candidate.profession}
                description={candidate.description}
                onClickAccept={() => handleAccept(candidate.id)}
                onClickIgnore={() => handleIgnore(candidate.id)}
              />
            ))
          ) : (
            <p id="emptyMsg">"No candidates at this time :/"</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Candidates;
