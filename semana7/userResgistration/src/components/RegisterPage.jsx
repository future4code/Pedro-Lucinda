import React from "react";
import axios from "axios";
import "../Styles.css";

import add from "../assets/add.svg";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "pedro-lucinda-dumont",
  },
};

class RegisterPage extends React.Component {
  state = {
    nameValue: "",
    emailValue: "",
  };

  createUser = async () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };

    try {
      await axios.post(baseUrl, body, axiosConfig);

      this.setState({ nameValue: "", emailValue: "" });
      alert("Usuário criado com sucesso!!");
    } catch (error) {
      console.log(error.message);
    }
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  render() {
    return (
      <div className="formContainer">
        <h1>Register</h1>
        <div className="form">
          <input
            value={this.state.nameValue}
            onChange={this.onChangeNameValue}
          />
          <input
            value={this.state.emailValue}
            onChange={this.onChangeEmailValue}
          />
          <button onClick={this.createUser}>
            <img src={add} alt="Register User" />{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
