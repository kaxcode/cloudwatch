import React, { Component } from 'react';
import { Row, Button, Card, Col } from 'react-materialize';
import { millisecondsToHuman } from './utils/humanizeTimer';

export default class Stopwatch extends Component {
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
        <Col s={12} m={3} offset="m2 l4">
          <Card className="white parent-container" textClassName="black-text">
            <h3>CloudWatch</h3>
            <h3>{millisecondsToHuman(this.state.counter)}</h3>
            <div className="parent-container">
              <Button
                waves="light"
                className="green timer-btn"
                onClick={this.startStopwatch}
              >
                Start
              </Button>
              <Button
                waves="light"
                className="red timer-btn"
                onClick={this.pauseStopwatch}
              >
                Pause
              </Button>
              <Button
                waves="light"
                className="yellow darken-3 timer-btn timer-clear"
                onClick={this.clearStopwatch}
              >
                Clear
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
