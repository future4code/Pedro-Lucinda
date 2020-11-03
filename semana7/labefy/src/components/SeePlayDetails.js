import React from "react";
import axios from "axios";
import '../Styles/playDetails.css'

import addIcon from "../assets/addIcon.svg"
import removeIcon from '../assets/removeIcon.svg'

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/";
const axiosConfig = {
  headers: {
    Authorization: "pedro-lucinda-dumont",
  },
};

export default class SeePlayDetails extends React.Component {
  state = {
    playTracks: [],
		play: this.props.play,
		trackName: '',
		trackArtist: '',
		trackUrl: '',
  };

  componentDidMount() {
    this.getTracks();
  }

  getTracks = async () => {
    const id = this.props.play.id;
    try {
      const response = await axios.get(`${baseUrl}${id}/tracks`, axiosConfig);

      this.setState({ playTracks: response.data.result.tracks });
    } catch (error) {
      console.log(error.message);
    }
	};
	
	// // try {
	// 	await axios.post(baseUrl, body, axiosConfig);
	// 	this.setState({ inpPlayName: "" });
	// 	this.getPlaylists();
		
	// } catch (error) {
	// 	console.log(error.message);
	// }

  addTrack = async () => {
		const body ={
			name: this.state.trackName,
			artist: this.state.trackArtist,
			url: this.state.trackUrl,
		}
		const id = this.props.play.id;
    try {
			await axios.post(`${baseUrl}${id}/tracks`, body,axiosConfig);
			this.setState({ trackName: "",  trackArtist: "",  trackUrl: "" });
			this.getTracks();
    } catch (error) {
      console.log(error.message);
    }
  };

	onChangetrackName = (event) => {
		this.setState({trackName: event.target.value})
	}
	onChangetrackArtist = (event) => {
		this.setState({trackArtist: event.target.value})
	}
	onChangetrackUrl = (event) => {
		this.setState({trackUrl: event.target.value})
  }
  
  removeTrack = (id) => {
    //https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId
    const newArray = this.state.playTracks.filter(track => track.id !== id)

   axios.delete(`${baseUrl}${this.state.play.id}/tracks/${id}`,axiosConfig)

   this.setState({ playTracks: newArray})
  }

  render() {


    const renderTracks = () => {
  
      return this.state.playTracks.map((track) => {
        return (
          <div key={track.id} className="track">
            <h3>{track.name}</h3>
            <p> {track.artist} </p>
						<audio controls>
						<source src={track.url} type="audio/mp3"/>
          
						</audio>
					  <button onClick={() => this.removeTrack(track.id)}><img src={removeIcon}  alt="Remove track"/></button>	
            
          </div>
        );
      });
    };
    return (
      <div className="playDetailComponent">
        <h1> {this.state.play.name} </h1>
				<div className="inputsNewTrack">
        <input
          value={this.state.trackName}
          onChange={this.onChangetrackName}
          type="text"
          placeholder="Name"
        />

        <input
          value={this.state.trackArtist}
          onChange={this.onChangetrackArtist}
          type="text"
          placeholder="Artist"
        />

        <input
          value={this.state.trackUrl}
          onChange={this.onChangetrackUrl}
          type="url"
          placeholder="Track Link"
        />
				<button onClick={this.addTrack}><img src={addIcon} alt='Add Track' /></button>
      </div>
        
        {renderTracks()}
		
      </div>
    );
  }
}
