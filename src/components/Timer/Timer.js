import React from 'react';
import { Row } from 'react-materialize';
import TimerLayout from './TimerLayout.js';

const HOURS = 3600;
const MINUTES = 60;
const SECONDS = 1;
const MAX_HOURS = 23 * 60 * 60 - 1;
const MAX_MINUTES = 24 * 60 - 1;
const MAX_SECONDS = 59;
const MIN_TIME = 0;

class Timer extends React.Component {
  state = {
    timeRemaining: 0,
    startClicked: false
  };

  timer = null;

  increaseHours = () => {
    if (this.state.timeRemaining >= MAX_HOURS) {
      return;
    }
    this.setState({ timeRemaining: this.state.timeRemaining + HOURS });
  };

  decreaseHours = () => {
    if (this.state.timeRemaining <= HOURS) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining - HOURS });
  };

  increaseMinutes = () => {
    if (this.state.timeRemaining / 60 >= MAX_MINUTES) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining + MINUTES });
  };

  decreaseMinutes = () => {
    if (this.state.timeRemaining <= MINUTES) {
      return;
    }

    this.setState({ timeRemaining: this.state.timeRemaining - MINUTES });
  };

  increaseSeconds = () => {
    if (this.state.timeRemaining % 60 >= MAX_SECONDS) {
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

  startTimer = () => {
    if (this.state.startClicked) {
      return;
    }
    clearInterval(this.timer);
    this.setState({ startClicked: true });
    this.timer = setInterval(this.tick, 1000);
  };

  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({ startClicked: false });
  };

  clearTimer = () => {
    this.setState({
      startClicked: false,
      timeRemaining: 0
    });
  };

  tick = () => {
    if (this.state.timeRemaining <= 0) {
      return this.clearTimer();
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
      <Row>
        <TimerLayout
          handleDismiss={() => this.handleDismiss()}
          increaseHours={() => this.increaseHours()}
          decreaseHours={() => this.decreaseHours()}
          increaseMinutes={() => this.increaseMinutes()}
          decreaseMinutes={() => this.decreaseMinutes()}
          increaseSeconds={() => this.increaseSeconds()}
          decreaseSeconds={() => this.decreaseSeconds()}
          startTimer={() => this.startTimer()}
          pauseTimer={() => this.pauseTimer()}
          clearTimer={() => this.clearTimer()}
          startClicked={this.state.startClicked}
          timeRemaining={this.state.timeRemaining}
        />
      </Row>
    );
  }
}

export default Timer;
