import React, { useState } from "react";
//styles
import { H1, H4, P } from "../components/styledComponents/Text";
import { InputForm } from "../components/styledComponents/Form";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/login.css";
//routes
import { useHistory, Link } from "react-router-dom";
//services
import api from "../services/api";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleLogin() {
    if (password !== '' && email !== '') {
      alert("Registered successfully");
      return history.push("/");
    } else {
      alert("Please inset a valid email and password");
    }
  }

  return (
    <div className="login-container">
      <H1>Login</H1>
      <P>Welcome Back!</P>
      <div className="login-form">
        <H4> Email: </H4>
        <InputForm value={email} onChange={onChangeEmail} />
        <H4> Password: </H4>
        <InputForm value={password} onChange={onChangePassword} />
      </div>
      <SendBtn onClick={handleLogin}> Login </SendBtn>
    </div>
  );
};

export default Login;
