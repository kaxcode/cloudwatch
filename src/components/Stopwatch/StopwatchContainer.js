import React from 'react';
import Stopwatch from './Stopwatch';

export default class StopwatchContainer extends React.Component {
  state = {
    counter: 0,
    clicked: false
  };

  timer = null;

  handleStart = () => {
    if (this.state.clicked === false) {
      clearInterval(this.timer);
      this.timer = setInterval(this.tick, 10);
      this.setState({ clicked: true });
    }
  };

  handlePause = () => {
    clearInterval(this.timer);
    this.setState({ clicked: false });
  };

  handleClear = () => {
    clearInterval(this.timer);
    this.setState({ counter: 0 });
    this.setState({ clicked: false });
  };

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <Stopwatch
        onStart={this.handleStart}
        onPause={this.handlePause}
        onClear={this.handleClear}
        counter={this.state.counter}
      />
    );
  }
}
