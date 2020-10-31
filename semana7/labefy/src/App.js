import React from "react";
import axios from "axios";
import Home from "./components/Home"
import "./Styles/app.css";

import logo from "./assets/logo.png";
import plus from "./assets/Plus.png";
import AddPlaylist from "./components/AddPlaylist";
import SeePlayDetails from "./components/SeePlayDetails";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const axiosConfig = {
  headers: {
    Authorization: "pedro-lucinda-dumont",
  },
};

class App extends React.Component {
  state = {
    playlists: [],
    addPlay: false,
    playDetail: false,
    home:false,
    play: '',
  };

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ playlists: response.data.result.list });
    } catch (error) {
      console.log(error.message);
    }
  };

  playDetail = (playlist) => {
    const id = playlist.id
    // eslint-disable-next-line array-callback-return
    this.state.playlists.map(play => {
      if(play.id === id){
        this.setState({ playDetail: !this.state.playDetail, addPlay: false , play: playlist});
      }}
    )
  }

  addPlaylist = () => {
    this.setState({ addPlay: true });
    this.setState({ playDetail: false });
    
  };

  renderPlaylistList = () => {
    return this.state.playlists.map((playlist) => {
      return (
        <li key={playlist.id} onClick={() => this.playDetail(playlist)}>
             {playlist.name}
        </li>
      );
    });
  };

  render() {
  
    const renderComponent = () => {
      if (this.state.addPlay) {
        return (
        <AddPlaylist /> 
        )
      }else if (this.state.playDetail) {
        return (
          <SeePlayDetails 
            play={this.state.play}
          />
          
        )
      }else if(this.state.home){
        <Home />
      }
    };

    return (
      <div className="App">
        <div className="sidebar">
          <img src={logo} alt="logo" />
          <button onClick={this.onClickHome}>Home</button>
          <button>Search</button>
          <div className="addPlay" onClick={this.addPlaylist}>
            <img
              className="plusIcon"
              src={plus}
              alt="add playlist"
            />
            <p>New Playlist</p>
          </div>
          <ul className="playlistsList">{this.renderPlaylistList()}</ul>
        </div>
        <div className="component">{renderComponent()}</div>
      </div>
    );
  }
}
export default App;
