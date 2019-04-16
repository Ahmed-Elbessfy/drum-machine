import React, { Component } from "react";
import "./App.css";

import Buttons from "./components/Buttons";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      active: true,
      btnsData: [
        {
          id: "Q",
          key: 81,
          sound: "Heater-1",
          audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
          id: "W",
          key: 87,
          sound: "Heater-2",
          audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
          id: "E",
          audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
          key: 69,
          sound: "Heater-3"
        },
        {
          id: "A",
          key: 65,
          sound: "Shaker",
          audioSrc:
            "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
        },
        {
          id: "S",
          key: 83,
          sound: "Clap",
          audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        {
          id: "D",
          key: 68,
          sound: "Open-HH",
          audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        {
          id: "Z",
          key: 90,
          sound: "Kick-n'-Hat",
          audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
          id: "X",
          key: 88,
          sound: "Kick",
          audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
          id: "C",
          key: 67,
          sound: "Closed-HH",
          audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
      ]
    };
    this.displaySound = this.displaySound.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  displaySound(sound) {
    this.setState({
      display: sound
    });
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const onStyle = {
      color: this.state.active ? "#d4d4d4" : "#374c50",
      borderRight: "2px solid #d4d4d4"
    };
    const offStyle = {
      color: this.state.active ? "#374c50" : "#d4d4d4"
    };
    return (
      <div className="App">
        <div className="drum-machine">
          <button onClick={this.toggleActive} className="toggleActive">
            <span style={onStyle}>on</span>
            <span style={offStyle}>off</span>
          </button>
          <p id="display">{this.state.display}</p>
          <Buttons
            btnsData={this.state.btnsData}
            display={this.displaySound}
            activeState={this.state.active}
          />
        </div>
      </div>
    );
  }
}

export default App;
