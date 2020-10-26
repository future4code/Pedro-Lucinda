import React from "react";
import "./pageWhats.css";
import "./chat.css";
import TypeBar from "./TypeBar";
import TopBar from "./TopBar";

import styled from "styled-components";

import chatIcon from "../../img/chat.svg";
import recievedIcon from "../../img/recived.svg";

const messageDiv = styled.div`
  background-color: none;
  width: 200px;
  height: auto;
`;

class PageWhats extends React.Component {
  state = {
    messages: [],
    nameInp: "",
    messageInp: "",
  };

  onChangeName = (event) => {
    this.setState({ nameInp: event.target.value });
  };
  onChangeMessage = (event) => {
    this.setState({ messageInp: event.target.value });
  };

  send = () => {
    const newMessage = {
      nome: this.state.nameInp,
      message: this.state.messageInp,
    };

    const newMessagesArray = [newMessage, ...this.state.messages];

    this.setState({ messages: newMessagesArray, messageInp: "" });
  };

  render() {
    return (
      <div className="pageWhatsBg">
        <div className="greenBgBox"></div>
        <div className="content">
          <TopBar name={this.state.nameInp} />
          <div className="chatContainer">
            <div className="chatDisplay">
              {this.state.messages.map((message, index) => {
                return (
                  <p key={index}>
                    <strong>{message.nome}</strong> : {message.message}
                  </p>
                );
              })}
            </div>

            <TypeBar
              onChangeName={this.onChangeName}
              valueName={this.state.nameInp}
              onChangeMessage={this.onChangeMessage}
              valueMessage={this.state.messageInp}
              click={this.send}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PageWhats;
