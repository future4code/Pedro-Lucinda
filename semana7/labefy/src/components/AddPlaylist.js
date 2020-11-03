import React from "react";
import axios from "axios";

import addIcon from "../assets/addIcon.svg"
import removeIcon from "../assets/removeIcon.svg"

import "../Styles/addPlaylist.css";
const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/";
const axiosConfig = {
  headers: {
    Authorization: "pedro-lucinda-dumont",
  },
};

export default class AddPlaylist extends React.Component {
  state = {
    playlists: [],
    inpPlayName: "",
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

  createPlaylist = async () => {
    const body = {
      name: this.state.inpPlayName,
    };

    try {
      await axios.post(baseUrl, body, axiosConfig);
      this.setState({ inpPlayName: "" });
      this.getPlaylists();
    } catch (error) {
      console.log(error.message);
    }
  };

  delPlay = async (id) => {
    // eslint-disable-next-line array-callback-return
    const newId = this.state.playlists.filter((play) =>
      play.id === id ? play.id : null
    );
    try {
      const response = await axios.delete(
        `${baseUrl}${newId[0].id}`,
        axiosConfig
      );
      const playArray = [...this.state.playlists];
      const newPlayArray = playArray.splice(response, 1);
      this.getPlaylists();

      this.setState({ playlists: newPlayArray });
    } catch (error) {
      console.log(error.message);
    }
  };

  renderPlaylistList = () => {
    return this.state.playlists.map((playlist) => {
      return (
        <div className="playlist" key={playlist.id}>
          <p>{playlist.name}</p>
          <button onClick={() => this.delPlay(playlist.id)}><img src={removeIcon} alt="Remove Icon" /></button>
        </div>
      );
    });
  };

  onChangeInpName = (event) => {
    this.setState({ inpPlayName: event.target.value });
  };

  render() {
    return (
      <div className="addPlaylistComponent">
        <h1> Create a new playlist</h1>
        <div className="addPlayInp">
          <input
            type="text"
            placeholder="Playlist Name"
            value={this.state.inpPlayName}
            onChange={this.onChangeInpName}
          />
          <button onClick={this.createPlaylist}><img src={addIcon} alt="Add Playlist"/></button>
        </div>
        <div className="playlistsList">{this.renderPlaylistList()}</div>
      </div>
    );
  }
}
