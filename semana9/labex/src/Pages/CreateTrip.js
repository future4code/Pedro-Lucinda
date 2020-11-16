import React from "react";
import { H1, H4, P } from "../components/styledComponents/Text";
import {
  InputForm,
  ShortInp,
  Textarea,
  Select,
} from "../components/styledComponents/Form";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/apply.css";

const CreateTrip = () => {
  return (
    <div className="createTrip-container">
      <H1> Create Trip </H1>

      <div className="apply-form">
        <H4> Name: </H4>
        <InputForm />

        <div className="apply-formDiv">
          <div>
            <H4>Date:</H4>
            <ShortInp />
          </div>
          <div>
            <H4>Planet:</H4>
            <Select></Select>
          </div>
        </div>

        <H4>Duration:</H4>
        <InputForm />
        <H4>Profession:</H4>
        <InputForm />
        <H4> Description: </H4>
        <Textarea />
      </div>
      <SendBtn> Apply </SendBtn>
    </div>
  );
};

export default CreateTrip;
