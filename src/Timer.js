import React, { Component } from 'react';
import { Row, Button, Card, Col } from 'react-materialize';

export default class Timer extends Component {

  state = {
    timer: null,
    counter: 0,
    clicked: false
  };

  startTimer = () => {
    if (this.state.clicked === false) {
    clearInterval(this.state.timer);
    const timer = setInterval(this.tick, 1000);
    this.setState({ timer });
    this.setState({ clicked: true });
    }
  }

  pauseTimer = () => {
    clearInterval(this.state.timer);
    this.setState({ clicked: false });
  }

  clearTimer = () => {
    clearInterval(this.state.timer);
    this.setState({ counter: 0 });
    this.setState({ clicked: false });
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <Row>
        <Col s={12} m={3} offset="m2 l4">
          <Card className="white parent-container" textClassName="black-text">
            <h3>CloudWatch</h3>
            <h3>{this.state.counter}</h3>
            <div>
              <Button waves="light" className="green" onClick={this.startTimer}>
                Start
              </Button>
              <Button waves="light" className="red" onClick={this.pauseTimer}>
                Pause
              </Button>
              <Button
                waves="light"
                className="yellow darken-3"
                onClick={this.clearTimer}
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
