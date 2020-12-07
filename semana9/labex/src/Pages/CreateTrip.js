import React, { useState, useContext } from "react";
import { H1, H4 } from "../components/styledComponents/Text";
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


const CreateTrip = () => {
  const { trips, setTrips } = useContext(TripsContext);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [planet, setPlanet] = useState("");
  const [duration, setDuration] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");



  return (
    <div className="createTrip-container">
      <H1> Create Trip </H1>

      <div className="apply-form">
        <H4> Name: </H4>
        <InputForm value={name} onChange={(e) => setName(e.target.value)} />

        <div className="apply-formDiv">
          <div>
            <H4>Date:</H4>
            <ShortInp value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <H4>Planet:</H4>
            <Select value={planet} onChange={(e) => setPlanet(e.target.value)}>
              <option value="Mars">Mars </option>
              <option value="Moon">Moon </option>
              <option value="Venus">Venus </option>
              <option value="Saturn">Saturn</option>
              <option value="Neturn">Neturn</option>
              <option value="Jupiter">Jupiter</option>
              <option value="Uranus">Uranus</option>
              <option value="Pluto">Pluto</option>
              <option value="Mercury">Mercury</option>
            </Select>
          </div>
        </div>

        <H4>Duration:</H4>
        <InputForm
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <H4>Profession:</H4>
        <InputForm
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <H4> Description: </H4>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <SendBtn > Apply </SendBtn>
    </div>
  );
};

export default CreateTrip;
