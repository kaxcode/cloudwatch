import React from 'react';
import Timer from './Timer.js';

const HOURS = 3600;
const MINUTES = 60;
const SECONDS = 1;
const MAX_TIME = 24 * 60 * 60;
const MIN_TIME = 0;

class TimerContainer extends React.Component {
  state = {
    timeRemaining: 0,
    startClicked: false
  };

  timer = null;

  increaseHours = () => {
    if (this.state.timeRemaining >= MAX_TIME) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining + HOURS });
  };

  decreaseHours = () => {
    if (this.state.timeRemaining < HOURS) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining - HOURS });
  };

  increaseMinutes = () => {
    if (this.state.timeRemaining >= MAX_TIME) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining + MINUTES });
  };

  decreaseMinutes = () => {
    if (this.state.timeRemaining < MINUTES) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining - MINUTES });
  };

  increaseSeconds = () => {
    if (this.state.timeRemaining >= MAX_TIME) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining + SECONDS });
  };

  decreaseSeconds = () => {
    if (this.state.timeRemaining <= MIN_TIME) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining - SECONDS });
  };

  handleStart = () => {
    if (this.state.startClicked) {
      return;
    }
    clearInterval(this.timer);
    this.setState({ startClicked: true });
    this.timer = setInterval(this.tick, 1000);
  };

  handlePause = () => {
    clearInterval(this.timer);
    this.setState({ startClicked: false });
  };

  handleClear = () => {
    this.setState({
      startClicked: false,
      timeRemaining: 0
    });
  };

  tick = () => {
    if (this.state.timeRemaining <= 0) {
      return this.handleClear();
    }

    this.setState({
      timeRemaining: this.state.timeRemaining - 1
    });
  };

  handleDismiss = () => {
    this.setState({
      startClicked: false
    });
    clearInterval(this.timer);
  };

  render() {
    return (
      <Timer
        handleDismiss={this.handleDismiss}
        increaseHours={this.increaseHours}
        decreaseHours={this.decreaseHours}
        increaseMinutes={this.increaseMinutes}
        decreaseMinutes={this.decreaseMinutes}
        increaseSeconds={this.increaseSeconds}
        decreaseSeconds={this.decreaseSeconds}
        onStart={this.handleStart}
        onPause={this.handlePause}
        onClear={this.handleClear}
        startClicked={this.state.startClicked}
        timeRemaining={this.state.timeRemaining}
      />
    );
  }
}

export default TimerContainer;
