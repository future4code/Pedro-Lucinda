import React from "react";
import { H1, H4, P } from "../components/styledComponents/Text";
import { InputForm } from "../components/styledComponents/Form";
import { SendBtn } from "../components/styledComponents/Buttons";
import '../styles/login.css'

const Register = () => {
  return (
    <div className="login-container">
      <H1>Register</H1>
      <P>Welcome Back!</P>
      <div className="login-form">
        <H4> Email: </H4>
        <InputForm />
        <H4> Password: </H4>
        <InputForm />
      </div>
				<SendBtn> Register  </SendBtn>
    </div>
  );
};

export default Register;
