import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
//css
import "../styles/home.css";
//Imgs
import profile from "../assets/icon/user.svg";
import chat from "../assets/icon/chat.svg";
import logo from "../assets/tinder-logo.png";
import notAMatch from "../assets/icon/notAMatch.svg";
import match from "../assets/icon/match.svg";
//components
import MatchCard from "../components/MatchCard";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const Home = (props) => {
  const [newPerson, setNewPerson] = useState({});
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getPerson();
  }, []);

  function getPerson() {
    api
      .get(`pedro/person`)
      .then((response) => setNewPerson(response.data.profile))
      .catch((error) => console.log(error));
  }

  function chooseMatch() {
    const body = {
      id: newPerson.id,
      choice: true,
    };

    api.post("pedro/choose-person", body, config).then((response) => {
      const matchArr = [...matches];
      matchArr.push(newPerson);
      setMatches(matchArr);
      getPerson();
    });
  }

  return (
    <div className="home-container animateUp">
      <div className="home-btns">
        <img className="home-icons" src={profile} alt="Profile" />

        <Link to="/">
          <img className="home-icons" src={logo} alt="logo" />
        </Link>

        <Link to="/chat">
          <img className="home-icons" src={chat} alt="Chat" />
        </Link>
      </div>

      <MatchCard
        personImg={newPerson.photo}
        matchDescription={newPerson.bio}
        matchName={newPerson.name}
      />

      <div className="match-btns">
        <button className="home-btns-icons" onClick={getPerson}>
          <img src={notAMatch} alt="Not a match" />
        </button>

        <button className="home-btns-icons"  onClick={chooseMatch}>
          <img src={match} alt="Match" />
        </button>
      </div>
    </div>
  );
};

export default Home;
