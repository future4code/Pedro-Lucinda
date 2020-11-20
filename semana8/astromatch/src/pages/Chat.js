import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/chat.css";
import notAMatch from "../assets/icon/notAMatch.svg";
import logo from "../assets/tinder-logo.png";
import profile from "../assets/icon/user.svg";

const Chat = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  function getMatches() {
    api
      .get("pedro/matches")
      .then((response) => setMatches(response.data.matches))
      .catch((error) => console.log(error));
  }

  function clearMatches() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    api
      .put("pedro/clear", config)
      .then((response) => setMatches(response.data.matches))
      .catch((error) => console.log(error));
  }

  return (
    <div className="chat-container animateUp">
      <div className="chat">
        <div className="chat-btns">
          <img src={profile} alt="Profile" />
          <Link to="/">
            <img src={logo} alt="Go back" />
          </Link>
          <button id="notMatch" onClick={clearMatches}>
            <img src={notAMatch} alt="Clear" />
          </button>
        </div>
        <div className="chats-msgs">
          {matches &&
            matches.map((match) => (
              <div className="match-div">
                <img
                  className="match-chatImg"
                  src={match.photo}
                  alt="Match Image"
                />
                <h3 key={match.id}>{match.name}</h3>

              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
