import React from 'react';
import { Row, Button, Card, Col, Table } from 'react-materialize';
import { secondsToHour, secondsToMinutes, seconds } from './utils/humanizeTimer';

class Timer extends React.Component {
  state = {
    timeRemaining: 0
  };

  HOURS = 3600;
  MINUTES = 60;
  SECONDS = 1;

  increaseHours = () => {
    if (this.state.timeRemaining < 82800 ) {
        this.setState({ timeRemaining: (this.state.timeRemaining + this.HOURS) });
    }
  };

  decreaseHours = () => {
    if (this.state.timeRemaining > 0) {
      this.setState({ timeRemaining: (this.state.timeRemaining - this.HOURS ) });
    }
  };

  increaseMinutes = () => {
    if ((this.state.timeRemaining / 60 ) < 59) {
      this.setState({ timeRemaining: (this.state.timeRemaining + this.MINUTES) });
    }
  };

  decreaseMinutes = () => {
    if (this.state.timeRemaining > 0) {
      this.setState({ timeRemaining: (this.state.timeRemaining - this.MINUTES ) });
    }
  };

  increaseSeconds = () => {
    if (this.state.timeRemaining % 60 < 59) {
      this.setState({ timeRemaining: (this.state.timeRemaining + this.SECONDS) });
    }
  };

  decreaseSeconds = () => {
    if (this.state.timeRemaining > 0) {
      this.setState({ timeRemaining: (this.state.timeRemaining - this.SECONDS ) });
    }
  };

  startTimer = () => {

  };

  pauseTimer = () => {

  };

  clearTimer = () => {
    this.setState({ timeRemaining: 0 });
  };

  render() {
    return (
      <Row>
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
                      <Button className="hours plus-btn blue" onClick={this.increaseHours}>+</Button>
                      <Button className="hours minus-btn blue" onClick={this.decreaseHours}>-</Button>
                    </div>
                  </td>
                  <td>
                    <div className="minutes-set">
                      <Button className="minutes plus-btn blue" onClick={this.increaseMinutes}>+</Button>
                      <Button className="minutes minus-btn blue" onClick={this.decreaseMinutes}>-</Button>
                    </div>
                  </td>
                  <td>
                    <div className="seconds-set">
                      <Button waves="light" className="seconds plus-btn blue" onClick={this.increaseSeconds}>+</Button>
                      <Button className="seconds minus-btn blue" onClick={this.decreaseSeconds}>-</Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1 className="timer-count">{secondsToHour(this.state.timeRemaining)}</h1>
                  </td>
                  <td>
                    <h1 className="timer-count">{secondsToMinutes(this.state.timeRemaining)}</h1>
                  </td>
                  <td>
                    <h1 className="timer-count">{seconds(this.state.timeRemaining)}</h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button waves="light" className="green start-btn" onClick={this.startTimer}>
                      Start
                    </Button>
                  </td>
                  <td>
                    <Button waves="light" className="red pause-btn" onClick={this.pauseTimer}>
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
