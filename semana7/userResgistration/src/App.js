import React from "react";
import axios from "axios";
import "./App.css";

import add from "./assets/add.svg";
import removeIcon from "./assets/removeIcon.svg";

class App extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: "",
    hideForm: false,
  };

  componentDidMount = () => {
    this.getUsers();
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  onClickRegister = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "pedro-lucinda-dumont",
          },
        }
      )
      .then((response) => {
        this.setState({ inputName: "", inputEmail: "" });
        this.getUsers();
        this.alertRegister();
        this.setState({ hideForm: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onClickRemoveUser = (id) => {
    const userRemove = this.state.users.filter((user) => {
      if (user.id === id) {
        return user.id;
      }
    });

    const idRemove = userRemove[0].id;

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idRemove}`,
        {
          headers: {
            Authorization: "pedro-lucinda-dumont",
          },
        }
      )
      .then((response) => {
        // this.setState({ users: response.data });
        this.getUsers();
        this.alertRemove();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onClickHiddeList = () => {
    this.setState({ hideForm: false });
  };

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "pedro-lucinda-dumont",
          },
        }
      )
      .then((resposta) => {
        console.log(resposta.data);
        this.setState({ users: resposta.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  alertRemove = () => {
    alert("You have removed an user!");
  };
  alertRegister = () => {
    alert("You are registered!");
  };

  render() {
    const renderUsers = this.state.users.map((user) => {
      return (
        <div className="user" key={user.id}>
          <li>{user.name}</li>
          <button onClick={() => this.onClickRemoveUser(user.id)}>
            <img src={removeIcon} alt="Remove user" />
          </button>
        </div>
      );
    });

    const renderPage = () => {
      if (!this.state.hideForm) {
        return (
          <div className="formContainer">
            <h1> Register</h1>
            <div className="form">
              <input
                type="text"
                placeholder="Name"
                value={this.state.inputName}
                onChange={this.onChangeInputName}
              />

              <input
                type="email"
                placeholder="Email"
                value={this.state.inputEmail}
                onChange={this.onChangeInputEmail}
              />

              <button onClick={this.onClickRegister}>
                <img src={add} alt="register" />{" "}
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="listPage">
            <ul>{renderUsers}</ul>
            <button className="goBackBtn" onClick={this.onClickHiddeList}>
              Go back
            </button>
          </div>
        );
      }
    };

    return <div className="App">{renderPage()}</div>;
  }
}

export default App;
