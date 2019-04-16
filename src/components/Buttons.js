import React, { Component } from "react";
import PropTypes from "prop-types";

class Buttons extends Component {
  // play sounds function
  playAudio = audio => {
    // setting audio time to 0 for multiple fast clicks
    audio.currentTime = 0;
    // play audio
    audio.play();
  };
  // onClick function
  handleClick = e => {
    // check if app is active or not
    if (this.props.activeState) {
      // get audio child element from clicked button
      let audio = e.target.children[0];
      // call play sound function
      this.playAudio(audio);
      // pass button id to display prop
      this.props.display(e.target.id);
      // remove display value after 2 sec. by sending empty string through display prop
      setTimeout(() => {
        this.props.display("");
      }, 4000);
    }
  };

  componentDidMount() {
    // add event listener for keyboard clicks
    document.addEventListener("keydown", e => {
      // check if app is active or not
      if (this.props.activeState) {
        // add event listener only if the clicked button is within a set of buttons
        if ([81, 87, 69, 65, 83, 68, 90, 88, 67].indexOf(e.keyCode) !== -1) {
          //get audio with id equals to matching letter clicked on keyboard
          let audio = document.querySelector(
            `#${String.fromCharCode(e.keyCode)}`
          );
          this.playAudio(audio);
          // get sound from button element which is a parent of audio element with id equals to matching letter clicked on keyboard
          let display = document.querySelector(
            `#${String.fromCharCode(e.keyCode)}`
          ).parentElement.id;
          // pass sound to display prop
          this.props.display(display);
          // remove display value after 2 sec. by sending empty string through display prop
          setTimeout(() => {
            this.props.display("");
          }, 4000);
        }
      }
    });
  }

  render() {
    const btnsContainer = {
      display: "grid",
      gridTemplateColumns: "repeat(3 , 1fr)",
      gridGap: "5px"
    };
    const btnStyle = {
      minWidth: "4rem",
      minHeight: "4rem",
      border: "5px outset #5a6a6d",
      color: "#d4d4d4",
      background: "#3e565b",
      fontSize: "1.5rem",
      fontWeight: "700"
    };
    return (
      <div style={btnsContainer}>
        {this.props.btnsData.map(btn => {
          return (
            <button
              style={btnStyle}
              key={btn.key}
              className="drum-pad"
              id={btn.sound}
              onClick={this.handleClick}
            >
              {btn.id}
              <audio src={btn.audioSrc} className="clip" id={btn.id} />
            </button>
          );
        })}
      </div>
    );
  }
}

Buttons.propTypes = {
  btnsData: PropTypes.array.isRequired
};

export default Buttons;
