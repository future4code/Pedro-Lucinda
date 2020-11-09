import React from "react";
import axios from "axios";
import "./styles/app.css";


class App extends React.Component {
  state = {
    activitiesData: [],
    btnPressed: false,
    bgColor: "oranged",
  };

  componentDidMount() {
    this.getActivities();
  }


  onChangeInputParticipants = (event) => {
    this.setState({ inputParticipants: event.target.value });
  };


  getActivities = async () => {
    try {
      const response = await axios.get(
        `http://www.boredapi.com/api/activity`
      );
      this.setState({ activitiesData: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  pressedBtn = () => {
    this.setState({ btnPressed: true });
    this.getActivities()
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setState({bgColor: `#${randomColor}`})
    
  };


  render() {
    console.log(this.state.activitiesData);
    const renderActivities = this.state.btnPressed && (
      <div className="renderActivities" >
      <p>{this.state.activitiesData.activity}</p>
    </div>
    );

    return (
      <div className="App" style={{backgroundColor: this.state.bgColor}}>
        <h1>NEVER BE BORED AGAIN!</h1>
        <p>Press the button bellow to generate activities and stop being bored!</p>
        <button onClick={this.pressedBtn}> Generate </button>
        <div > <h2>{renderActivities}</h2> </div>
        <p className="author">Pedro Lucinda - 2020</p>
      </div>
    );
  }
}

export default App;
