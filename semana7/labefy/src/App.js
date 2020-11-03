import React from "react";
import axios from "axios";
import Home from "./components/Home";
import "./Styles/app.css";

import logo from "./assets/logo.png";
import plus from "./assets/Plus.png";
import homeIcon from "./assets/home.svg";
import playIcon from "./assets/play.svg";
import searchIcon from "./assets/search.svg";
import skipIcon from "./assets/Skip.svg";
import backIcon from "./assets/Skip-1.svg";
import songCover1 from "./assets/songCover-1.png";
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
    home: false,
    play: "",
  };

  componentDidMount() {
    this.getPlaylists();
  }

  componentDidUpdate() {
    this.getPlaylists();
    // this.playDetail();
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
    
    this.state.playlists.map(
      (play) =>
        play.id === playlist.id &&
        this.setState({
          playDetail: !this.state.playDetail,
          addPlay: false,
          home: false,
          play: playlist,
        })
    );

    this.renderComponent();
  };

  addPlaylist = () => {
    this.setState({ addPlay: true, playDetail: false, home: false });
  };

  onClickHome = () => {
    this.setState({ playDetail: false, addPlay: false, home: true });
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

  renderComponent = () => {
    if (this.state.addPlay) {
      return <AddPlaylist />;
    } else if (this.state.playDetail) {
      return <SeePlayDetails play={this.state.play} />;
    } else if (this.state.home) {
      return <Home />;
    } else if (!this.state.playDetail && !this.state.addPlay) {
      return <Home />;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <img src={logo} alt="logo" />
          <div className="option" onClick={this.onClickHome}>
            <img src={homeIcon} alt="Go to Home Page" />
            <p>Home</p>
          </div>
          <div className="option" onClick={this.onClickHome}>
            <img src={searchIcon} alt="Search" />
            <p>Search</p>
          </div>
          <div className="playlists">
            <p className="playContainerTitle">Playlists</p>
            <div className="addPlay" onClick={this.addPlaylist}>
              <img className="plusIcon" src={plus} alt="add playlist" />
              <p>New Playlist</p>
            </div>
            <ul className="playlistsList">{this.renderPlaylistList()}</ul>
          </div>
        </div>
        <div className="component">{this.renderComponent()}</div>
        <div className="musicBar">
          <div className="musicInfo">
            <img src={songCover1} alt="Song Cover" />
            <div className="musicInfo-text">
              <h3>Song Title</h3>
              <p>Artist</p>
            </div>
          </div>
          <div className="musicBar-controls">
            <div className="controls">
              <img src={backIcon} alt="PlaySong" />
              <img src={playIcon} alt="PlaySong" />
              <img src={skipIcon} alt="PlaySong" />
            </div>
            <div className="songBar">
              <p>2:00</p>
              <div className="bar"></div>
              <p>1:00</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
