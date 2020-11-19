import React, { useState, useContext } from "react";
//styles
import { H1, H4, P } from "../components/styledComponents/Text";
import {
  InputForm,
  ShortInp,
  Textarea,
  Select,
} from "../components/styledComponents/Form";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/apply.css";
//services
import api from "../services/api";
//context
import { TripsContext } from "../contex/TripsContext";
import { CadidatesContext } from "../contex/CadidatesContext";
//components
import NavBar from "../components/NavBar";
import { UserContext } from "../contex/UserContext";

const Apply = () => {
  const { trips } = useContext(TripsContext);
  const { userId } = useContext(UserContext);
  const { candidatesArr, setCandidates } = useContext(CadidatesContext);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");
  const [selectTrip, setSelectTrip] = useState("");

  console.log(candidatesArr)

  function handleApply() {
    const body = {
      name: name,
      age: age,
      applicationText: description,
      profession: profession,
      country: country,
    };

 
    api
      .post(`/trips/${userId}/apply`, body)
      .then((response) => {
        const newCandidate = {
          id: Math.random(),
          name: name,
          age: age,
          description: description,
          profession: profession,
          country: country,
        };
        
        const newArr = [...candidatesArr];
        newArr.push(newCandidate);
        
        setCandidates(newArr);
        alert(response.data.message);
      })
      .catch((error) => {
        alert("Please verify our info and try again.");
        console.log(error);
      });
  }

  return (
    <>
      <NavBar />
      <div className="apply-container">
        <H1> Application </H1>
        <P> Enter your info to apply for this trip! </P>

        <div className="apply-form">
          <H4> Name: </H4>
          <InputForm value={name} onChange={(e) => setName(e.target.value)} />

          <div className="apply-formDiv">
            <div>
              <H4>Age:</H4>
              <ShortInp value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
              <H4>Trip:</H4>
              <Select
                value={selectTrip}
                onChange={(e) => setSelectTrip(e.target.value)}
              >
                {trips.map((trip) => (
                  <option value={trip.name}>{trip.name}</option>
                ))}
              </Select>
            </div>
          </div>

          <H4>Country:</H4>
          <InputForm
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <H4>Profession:</H4>
          <InputForm
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          <H4> Why should you go on this trip? </H4>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <SendBtn onClick={handleApply}> Apply </SendBtn>
      </div>
    </>
  );
};

export default Apply;
