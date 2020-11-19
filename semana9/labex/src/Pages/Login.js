import React, { useContext } from "react";
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
//hooks
import { useForm } from "../hooks/useForm";

const Login = () => {
  const { form, onChange } = useForm({ email: "", password: "" });
  const { setUserId } = useContext(UserContext);
  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  function handleLogin(e) {
    e.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
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
        history.push(`/`);
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
      <form onSubmit={handleLogin}>
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
        <SendBtn> Login </SendBtn>
      </form>
      <P>
        Don't have an account yet? Click here to
        <Link to="/Register"> Register!</Link>
      </P>
    </div>
  );
};

export default Login;
