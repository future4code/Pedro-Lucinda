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

const Apply = () => {
  return (
    <div className="apply-container">
      <H1> Application </H1>
      <P> Enter your info to apply for this trip! </P>

      <div className="apply-form">
        <H4> Name: </H4>
        <InputForm />

        <div className="apply-formDiv">
          <div>
            <H4>Age:</H4>
            <ShortInp />
          </div>
          <div>
            <H4>Trip:</H4>
            <Select></Select>
          </div>
        </div>

        <H4>Country:</H4>
        <InputForm />
        <H4>Profession:</H4>
        <InputForm />
        <H4> Why should you go on this trip? </H4>
        <Textarea />
      </div>
      <SendBtn> Apply </SendBtn>
    </div>
  );
};

export default Apply;
