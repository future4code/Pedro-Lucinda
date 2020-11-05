import React, { useState, useEffect } from "react";
import axios from 'axios'

import "../Styles/home.css";
import Card from "./Card";

const baseUrl= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const axiosConfig = {
  headers: {
    Authorization: "pedro-lucinda-dumont",
  },
};



const Home = () => {

  const [playlists, setPlaylists]= useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async () => {
   const response = await axios.get(baseUrl, axiosConfig);
    return setPlaylists(response.data.result.list);
  
  },[])


  return (
    <div className="homeContainer">
      <h1>Recommended for you</h1>
      <div className="playlistsCards">
        {playlists.map(play => (
           <Card key={play.id}  src={`https://source.unsplash.com/500x500/?${play.name},music`} title={play.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
