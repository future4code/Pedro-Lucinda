import React from "react";
import { H1, H4, P, A } from "../components/styledComponents/Text";
import { InputForm } from "../components/styledComponents/Form";
import { SendBtn } from "../components/styledComponents/Buttons";
import "../styles/login.css";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login-container">
      <H1>Login</H1>
      <P>Welcome Back!</P>
      <div className="login-form">
        <H4> Email: </H4>
        <InputForm />
        <H4> Password: </H4>
        <InputForm />
      </div>
      <SendBtn> Login </SendBtn>
      <Link to="/Register">
        <A> Don`t have an account? Register!</A>
      </Link>
    </div>
  );
};

export default Login;
