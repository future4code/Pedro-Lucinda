import React, { useState } from "react";
//styles
import { H1, H4, P } from "../components/styledComponents/Text";
import { InputForm } from "../components/styledComponents/Form";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/login.css";
//Routes
import { useHistory } from "react-router-dom";
//Services
import api from "../services/api";

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleRegister() {
    const body = {
      email: email,
      password: password,
    };

    api
      .post("/signup", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (!response.data.success) {
          alert("Please insert the correct email and password");
        } else {
          alert("Registered successfully");
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Please inset a valid email and password or register");
      });

  }

  return (
    <div className="login-container">
      <H1>Register</H1>
      <P>Welcome Back!</P>
      <div className="login-form">
        <H4> Email: </H4>
        <InputForm value={email} onChange={onChangeEmail} />
        <H4> Password: </H4>
        <InputForm value={password} onChange={onChangePassword} />
      </div>
      <SendBtn onClick={handleRegister}> Register </SendBtn>
    </div>
  );
};

export default Register;
