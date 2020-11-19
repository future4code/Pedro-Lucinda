import React, { useContext } from "react";
//services
import api from "../services/api";
//style
import { H1 } from "../components/styledComponents/Text";
//components
import NavBar from "../components/NavBar";
import CandidateCard from "../components/CandidateCard";
//context
import { CadidatesContext } from "../contex/CadidatesContext";
import { ApplyIdContext } from "../contex/ApplyIdContext";

const Candidates = () => {
  const { candidatesArr, setCandidates } = useContext(CadidatesContext);
  const { applyId } = useContext(ApplyIdContext);

  function handleAccept(id) {
    console.log(id);
    api
      .put(
        `/trips/${applyId}/candidates/${id}/decide`,
        { approve: true },
        {
          headers: {
            "Content-Type": "application/json",
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
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
          {candidatesArr
            ? candidatesArr.map((candidate) => (
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
            : "No candidates at this time :/"}
        </div>
      </div>
    </>
  );
};

export default Candidates;
