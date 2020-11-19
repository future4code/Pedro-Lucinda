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
//hooks
import { useForm } from "../hooks/useForm";

const Register = () => {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });


  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  function handleRegister(e) {
    e.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
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
          history.push("/Login");
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
      <form onSubmit={handleRegister}>
        <div className="login-form">
          <H4> Email: </H4>
          <InputForm
            value={form.email}
            onChange={handleInputChange}
            name={"email"}
            type={"email"}
            required
          />
          <H4> Password: </H4>
          <InputForm
            value={form.password}
            onChange={handleInputChange}
            name={"password"}
            type={"password"}
            pattern={".{6,}"}
            required
          />
        </div>
        <SendBtn> Register </SendBtn>
      </form>
    </div>
  );
};

export default Register;
