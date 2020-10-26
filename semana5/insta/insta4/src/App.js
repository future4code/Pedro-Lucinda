import React from "react";
import "./App.css";
import FriendsBar from "./components/FriendsBar/FriendsBar";
import Nav from "./components/Nav/Nav";
import Post from "./components/Post/Post";
import styled from "styled-components";

import pedro from "./img/pedro.jpg";
import codePost from "./img/codePost.jpeg";
import jerry from "./img/Jerry.jpg";
import nathy from "./img/Nathy.jpg";
import covidPost from "./img/covidPost.jpg";
import travelPost from "./img/travelPost.jpg";

const FormDiv = styled.div`
  width: 480px;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;

  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InpText = styled.input`
  width: 100%;
  height: 50px;

  outline: none;
  border: none;
  border-bottom: 1px solid #c5c5c5;

  color: black;
  font-size: 16px;

  margin-bottom: 10px;
`;

const PostButton = styled.button`
  color: #44a3f6;
  font-weight: 600;
  font-size: 15px;

  border: none;
  background-color: white;
  outline: none;
  height: 30px;

  margin-left: 80%;
  margin-top: 10px;
`;

class App extends React.Component {
  state = {
    people: [
      { nomeUsuario: "Pedro", fotoUsuario: pedro, fotoPost: codePost },
      { nomeUsuario: "Nathy", fotoUsuario: nathy, fotoPost: covidPost },
      { nomeUsuario: "Jerry", fotoUsuario: jerry, fotoPost: travelPost },
    ],
  };

  onChangeName = (event) => this.setState({ nomeUsuario: event.target.value });
  onChangeUserImg = (event) =>
    this.setState({ fotoUsuario: event.target.value });
  onChangePostImg = (event) => this.setState({ fotoPost: event.target.value });

  newPost = () => {
    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    const novaListaDePost = [novoPost, ...this.state.people];

    this.setState({ people: novaListaDePost });
  };

  render() {
    const listaPessoas = this.state.people.map((person) => {
      return (
        <Post
          nomeUsuario={person.nomeUsuario}
          fotoUsuario={person.fotoUsuario}
          fotoPost={person.fotoPost}
        />
      );
    });

    return (
      <div className={"app-container"}>
        <Nav />
        <FriendsBar />

        <FormDiv>
          <InpText
            type="text"
            placeholder="Nome"
            value={this.state.nomeUsuario}
            onChange={this.onChangeName}
          />
          <InpText
            type="url"
            placeholder="Sua foto"
            value={this.state.fotoUsuario}
            onChange={this.onChangeUserImg}
          />
          <InpText
            type="url"
            placeholder="Post"
            value={this.state.fotoPost}
            onChange={this.onChangePostImg}
          />
          <PostButton onClick={this.newPost}> Enviar</PostButton>
        </FormDiv>

        {listaPessoas}
      </div>
    );
  }
}

export default App;
