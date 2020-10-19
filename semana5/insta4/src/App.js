import React from "react";
import "./App.css";
import FriendsBar from "./components/FriendsBar/FriendsBar";
import Nav from "./components/Nav/Nav";
import Post from "./components/Post/Post";

import pedro from "./img/pedro.jpg";
import codePost from "./img/codePost.jpeg";
import jerry from "./img/Jerry.jpg";
import nathy from "./img/Nathy.jpg";
import covidPost from "./img/covidPost.jpg";
import travelPost from "./img/travelPost.jpg";

class App extends React.Component {
  render() {
    return (
      <div className={"app-container"}>
        <Nav />
        <FriendsBar />
        <Post nomeUsuario={"Pedro"} fotoUsuario={pedro} fotoPost={codePost} />
        <Post nomeUsuario={"Nathy"} fotoUsuario={nathy} fotoPost={covidPost} />
        <Post nomeUsuario={"Jerry"} fotoUsuario={jerry} fotoPost={travelPost} />
      </div>
    );
  }
}

export default App;
