import React from 'react';
import { Row } from 'react-materialize';
import StopwatchLayout from './StopwatchLayout';

export default class Stopwatch extends React.Component {
  state = {
    counter: 0,
    clicked: false
  };

  timer = null;

  startStopwatch = () => {
    if (this.state.clicked === false) {
      clearInterval(this.timer);
      this.timer = setInterval(this.tick, 10);
      this.setState({ clicked: true });
    }
  };

  pauseStopwatch = () => {
    clearInterval(this.timer);
    this.setState({ clicked: false });
  };

  clearStopwatch = () => {
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
      <Row>
        <StopwatchLayout
          startStopwatch={() => this.startStopwatch()}
          pauseStopwatch={() => this.pauseStopwatch()}
          clearStopwatch={() => this.clearStopwatch()}
          counter={this.state.counter}
        />
      </Row>
    );
  }
}
