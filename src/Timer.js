import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  state = {
    timer: null,
    counter: 0
  };

  startTimer() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  pauseTimer() {
    clearInterval(this.state.timer);
  }

  clearTimer() {
    clearInterval(this.state.timer);
    this.setState({ counter: 0 });
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <h2 className="">Timer</h2>
        <div>{this.state.counter}</div>
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.clearTimer}>Clear</button>
        </div>
      </div>
    );
  }
}
