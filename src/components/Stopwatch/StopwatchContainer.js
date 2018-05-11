import React from 'react';
import Stopwatch from './Stopwatch';
import PresentStopwatch from './PresentStopwatch';
import { object } from 'prop-types';

export default class StopwatchContainer extends React.Component {
  state = {
    counter: 0,
    clicked: false
  };

  timer = null;

  componentDidMount = () => {
    // Uses localStorage / 0 to set state
    const localStorageRef = localStorage.getItem('counter');
    this.setState({ counter: parseInt(localStorageRef, 0) || 0 });
  };

  componentDidUpdate() {
    // Sets the locastorage
    if (window.name === 'presenter' && localStorage.counter > 0) {
      this.handleStart();
    }
    localStorage.setItem('timeRemaining', this.state.counter);
  }

  componentWillUnmount() {
    // Sets counter to 0 if component is unmounted
    localStorage.setItem('counter', 0);
  }

  handleStart = () => {
    if (this.state.clicked === false) {
      clearInterval(this.timer);
      this.timer = setInterval(this.tick, 10);
      this.setState({ clicked: true });
      localStorage.setItem('clicked', true);
    }
  };

  handlePause = () => {
    clearInterval(this.timer);
    this.setState({ clicked: false });
    localStorage.setItem('clicked', false);
  };

  handleClear = () => {
    clearInterval(this.timer);
    this.setState({ counter: 0 });
    this.setState({ clicked: false });
    localStorage.setItem('counter', 0);
  };

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    localStorage.setItem('counter', this.state.counter);
  };

  render() {
    return window.name !== 'presenter' ? (
      <Stopwatch
        onStart={this.handleStart}
        onPause={this.handlePause}
        onClear={this.handleClear}
        counter={this.state.counter}
        clicked={this.state.clicked}
        location={this.props.location}
      />
    ) : (
      <PresentStopwatch
        onStart={this.handleStart}
        onPause={this.handlePause}
        onClear={this.handleClear}
        counter={localStorage.counter}
        clicked={this.state.clicked}
        location={this.props.location}
      />
    );
  }
}

StopwatchContainer.propTypes = {
  location: object
};
