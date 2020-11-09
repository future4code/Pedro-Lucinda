import axios from "axios";
import React from "react";

import UserDetails from "../components/UserDetails"
import "../Styles.css";
import removeIcon from "../assets/removeIcon.svg";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "pedro-lucinda-dumont",
  },
};

class UserListPage extends React.Component {
  state = {
    userList: [],
    showUser: false,
    renderUser: false,
  };

  componentDidMount = () => {
    this.getAllUsers();
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

  onClickShowUser = () => {
    const users = [...this.state.userList ]
    this.setState({...users, showUser: !this.state.showUser});
    this.setState({renderUser: !this.state.showUser});
  };

  render() {

    const renderUserList = this.state.userList.map((user) => {
      if(!this.state.showUser){
        return (
          <div key={user.id} className="user">
            <p onClick={() => this.onClickShowUser()}>{user.name}</p>
            <button onClick={() => this.deleteUser(user.id)}>
              <img src={removeIcon} alt="Remove User" />
            </button>
          
          </div>
        );
      }else{
        return  < UserDetails
        name={user.name}
        email={user.email}
        userID={user.id}

        />
      }
     
    });

    return <div className="listPage">{renderUserList}</div>;
  }
}

export default UserListPage;
