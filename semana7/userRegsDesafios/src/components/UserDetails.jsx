import React from "react";
import axios from "axios";
import "../Styles.css";
import removeIcon from "../assets/removeIcon.svg";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "pedro-lucinda-dumont",
  },
};

class UserDetails extends React.Component {
  state = {
    userList: [],
    edit: false,
    newName: "",
    newEmail: "",
  };

  getAllUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ userList: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  deleteUser = async (userId) => {
    let delUser = window.confirm("Are you sure?");

    if (delUser) {
      try {
        await axios.delete(`${baseUrl}/${userId}`, axiosConfig);
        alert("Usuário deletado com sucesso!");
        this.getAllUsers();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      return "";
    }
  };

  updateUser = async(id) => {
    const body = {
      name: this.state.newName,
      email: this.state.newEmail
  }

  try{
    const response = await axios.put(baseUrl/id, body, axiosConfig)
    this.setState({userList: response.data})
  }catch(error) {
    console.log(error.message)
  }
    

  }


  onChangeName = (event) => {
    this.setState({ newName: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ newEmail: event.target.value });
  };

  editUser = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    const renderEdit = this.state.edit ? (
      <>
        <input
          type="text"
          placeholder="name"
          value={this.state.newName}
          onChange={this.onChangeName}
        />
        <input
          type="text"
          placeholder="email"
          value={this.state.newEmail}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.updateUser}>Update</button>
      </>
    ) : (
      ""
    );

    return (
      <div className="userDetails">
        {this.props.name}
        {this.props.email}
        <button onClick={() => this.deleteUser(this.props.userID)}>
          <img src={removeIcon} alt="Remove Icon" />
        </button>
        <button onClick={this.editUser}>Edit</button>
        {renderEdit}
      </div>
    );
  }
}

export default UserDetails;
