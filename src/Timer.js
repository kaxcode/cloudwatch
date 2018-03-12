import React from 'react';
import { Row, Button, Card, Col, Table } from 'react-materialize';

class Timer extends React.Component {
  state = {
    hoursRemaining: 0,
    minutesRemaining: 0,
    secondsRemaining: 0
  };

  increaseHours = () => {
    if (this.state.hoursRemaining < 23) {
      this.setState({ hoursRemaining: this.state.hoursRemaining + 1 });
    }
  };

  decreaseHours = () => {
    if (this.state.hoursRemaining > 0) {
      this.setState({ hoursRemaining: this.state.hoursRemaining - 1 });
    }
  };

  increaseMinutes = () => {
    if (this.state.minutesRemaining < 59) {
      this.setState({ minutesRemaining: this.state.minutesRemaining + 1 });
    }
  };

  decreaseMinutes = () => {
    if (this.state.minutesRemaining > 0) {
      this.setState({ minutesRemaining: this.state.minutesRemaining - 1 });
    }
  };

  increaseSeconds = () => {
    if (this.state.secondsRemaining < 59) {
      this.setState({ secondsRemaining: this.state.secondsRemaining+ 1 });
    }
  };

  decreaseSeconds = () => {
    if (this.state.secondsRemaining > 0) {
      this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    }
  };

  startTimer = () => {

  };

  pauseTimer = () => {

  };

  clearTimer = () => {

  };

  render() {
    return (
      <Row>
      {console.log(this)}
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
                    <h1 className="timer-count">{this.state.hoursRemaining}</h1>
                  </td>
                  <td>
                    <h1 className="timer-count">{this.state.minutesRemaining}</h1>
                  </td>
                  <td>
                    <h1 className="timer-count">{this.state.secondsRemaining}</h1>
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
