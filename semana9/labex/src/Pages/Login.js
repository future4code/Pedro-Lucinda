import React, { useState, useContext } from "react";
//styles
import { H1, H4, P } from "../components/styledComponents/Text";
import { InputForm } from "../components/styledComponents/Form";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/login.css";
//routes
import { useHistory, Link } from "react-router-dom";
//services
import api from "../services/api";
//context
import { UserContext } from "../contex/UserContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { userId, setUserId } = useContext(UserContext);
  const history = useHistory();

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleLogin() {
    const body = {
      email: email,
      password: password,
    };

    api
      .post("/login", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setUserId(response.data.user.id);
        history.push(`/home/${response.data.user.id}`);
        console.log(userId);
      })
      .catch((error) => {
        console.log(error);
        alert("Please inset a valid email and password or register");
      });
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
      <P>
        Don't have an account yet? Click here to
        <Link to="/Register"> Register!</Link>
      </P>
    </div>
  );
};

export default Login;
