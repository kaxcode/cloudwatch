import React from 'react';
import Timer from './Timer.js';
import { object } from 'prop-types';

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

  componentDidMount = () => {
    // Uses localStorage / 0 to set state
    const localStorageRef = localStorage.getItem('timeRemaining');
    this.setState({ timeRemaining: parseInt(localStorageRef, 0) || 0 });
    if (window.name === 'presenter') {
      this.setState({ timeRemaining: localStorage.timeRemaining });
    }
  };

  componentDidUpdate() {
    // Sets the localstorage
    localStorage.setItem('timeRemaining', this.state.timeRemaining);
  }

  componentWillUnmount() {
    // Sets counter to 0 if component is unmounted
    localStorage.setItem('timeRemaining', 0);
  }

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
    localStorage.setItem('startClicked', true);
  };

  handlePause = () => {
    clearInterval(this.timer);
    this.setState({ startClicked: false });
    localStorage.setItem('startClicked', false);
  };

  handleClear = () => {
    this.setState({
      timeRemaining: 0
    });
    localStorage.setItem('timeRemaining', 0);
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
        location={this.props.location}
      />
    );
  }
}

TimerContainer.propTypes = {
  location: object
};

export default TimerContainer;
