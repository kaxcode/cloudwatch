import React from 'react';
import { Row, Button, Card, Col, Table } from 'react-materialize';
import {
  secondsToHour,
  secondsToMinutes,
  seconds
} from './utils/humanizeTimer';

const HOURS = 3600;
const MINUTES = 60;
const SECONDS = 1;
const MAX_HOURS = 23 * 60 * 60;
const MAX_MINUTES = 59;
const MAX_SECONDS = 59;
const MIN_TIME = 0;

class Timer extends React.Component {
  state = {
    timeRemaining: 0,
    clicked: false,
    alertSeen: false
  };

  timer = null;

  increaseHours = () => {
    if (this.state.timeRemaining >= MAX_HOURS) {
      return;
    }
    this.setState({ timeRemaining: this.state.timeRemaining + HOURS });
  };

  decreaseHours = () => {
    if (this.state.timeRemaining <= MIN_TIME) {
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
    if (this.state.timeRemaining <= MIN_TIME) {
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
    if (this.state.clicked) {
      return;
    }
    clearInterval(this.timer);
    this.setState({ clicked: true });
    this.timer = setInterval(this.tick, 1000);
  };

  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({ clicked: false });
  };

  clearTimer = () => {
    this.setState({
      clicked: false
    });
    this.setState({ timeRemaining: 0 });
  };

  tick = () => {
    if (this.state.timeRemaining <= 0) {
      return this.clearTimer();
    }

    this.setState({
      timeRemaining: this.state.timeRemaining - 1
    });
  };

  triggerAlert = () => {
    alert("Time's Up!");
    this.setState({
      clicked: false
    });
    clearInterval(this.timer);
    }

  render() {
    return (
      <Row>
      {this.state.clicked && this.state.timeRemaining === 0 ? this.triggerAlert() : null }
        <Col s={12} m={3} offset="m2 l4">
          <Card className="white parent-container" textClassName="black-text">
            <h3>Timer</h3>
            <Table className="setters">
              <thead>
                <tr>
                  <th className="timer-heading">Hours</th>
                  <th className="timer-heading">Minutes</th>
                  <th className="timer-heading">Seconds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="hours-set">
                      <Button
                        id="hours-increase"
                        className="plus-btn blue"
                        onClick={this.increaseHours}
                      >
                        +
                      </Button>
                      <Button
                        id="hours-decrease"
                        className="minus-btn blue"
                        onClick={this.decreaseHours}
                      >
                        -
                      </Button>
                    </div>
                  </td>
                  <td>
                    <div className="minutes-set">
                      <Button
                        id="minutes-increase"
                        className="plus-btn blue"
                        onClick={this.increaseMinutes}
                      >
                        +
                      </Button>
                      <Button
                        id="minutes-decrease"
                        className="minus-btn blue"
                        onClick={this.decreaseMinutes}
                      >
                        -
                      </Button>
                    </div>
                  </td>
                  <td>
                    <div className="seconds-set">
                      <Button
                        waves="light"
                        id="seconds-increase"
                        className="plus-btn blue"
                        onClick={this.increaseSeconds}
                      >
                        +
                      </Button>
                      <Button
                        id="seconds-decrease"
                        className="minus-btn blue"
                        onClick={this.decreaseSeconds}
                      >
                        -
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1 className="timer-count">
                      {secondsToHour(this.state.timeRemaining)}
                    </h1>
                  </td>
                  <td>
                    <h1 className="timer-count">
                      {secondsToMinutes(this.state.timeRemaining)}
                    </h1>
                  </td>
                  <td>
                    <h1 className="timer-count">
                      {seconds(this.state.timeRemaining)}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      waves="light"
                      className="green start-btn"
                      onClick={this.startTimer}
                    >
                      Start
                    </Button>
                  </td>
                  <td>
                    <Button
                      waves="light"
                      className="red pause-btn"
                      onClick={this.pauseTimer}
                    >
                      Pause
                    </Button>
                  </td>
                  <td>
                    <Button
                      waves="light"
                      className="yellow darken-3 clear-btn"
                      onClick={this.clearTimer}
                    >
                      Clear
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Timer;
