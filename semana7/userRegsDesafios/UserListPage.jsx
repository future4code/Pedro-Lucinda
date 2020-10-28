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
  };

  render() {


    const renderUserDetail = this.state.showUser ? (
      this.state.userList.map(user => {
        console.log(user)
        return (
          < UserDetails
          name={user.name}
          email={user.email}
          onClickDel={() => this.deleteUser(user.id)}
          />
        ) 
      })
    ): ''
     
  
   

    const renderUserList = this.state.userList.map((usuario) => {
      return (
        <div key={usuario.id} className="user">
          <p onClick={() => this.onClickShowUser()}>{usuario.name}</p>
          <button onClick={() => this.deleteUser(usuario.id)}>
            <img src={removeIcon} alt="Remove User" />
          </button>
          {renderUserDetail}
        </div>
      );
    });

    return <div className="listPage">{renderUserList}</div>;
  }
}

export default UserListPage;
