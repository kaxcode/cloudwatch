import React from 'react';
import { Row, Button, Card, Col, Table } from 'react-materialize';
import {
  secondsToHour,
  secondsToMinutes,
  seconds
} from '../../utils/humanizeTimer';
import Alert from '../Alert/Alert';
import PropTypes from 'prop-types';

const TimerLayout = props => {
  return (
    <Row>
      <Alert
        msg="Time is up!"
        onDismiss={props.handleDismiss}
        show={props.startClicked && props.timeRemaining <= 0}
      />
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
                      onClick={props.increaseHours}
                    >
                      +
                    </Button>
                    <Button
                      id="hours-decrease"
                      className="minus-btn blue"
                      onClick={props.decreaseHours}
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
                      onClick={props.increaseMinutes}
                    >
                      +
                    </Button>
                    <Button
                      id="minutes-decrease"
                      className="minus-btn blue"
                      onClick={props.decreaseMinutes}
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
                      onClick={props.increaseSeconds}
                    >
                      +
                    </Button>
                    <Button
                      id="seconds-decrease"
                      className="minus-btn blue"
                      onClick={props.decreaseSeconds}
                    >
                      -
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="timer-count">
                    {secondsToHour(props.timeRemaining)}
                  </h1>
                </td>
                <td>
                  <h1 className="timer-count">
                    {secondsToMinutes(props.timeRemaining)}
                  </h1>
                </td>
                <td>
                  <h1 className="timer-count">
                    {seconds(props.timeRemaining)}
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    waves="light"
                    className="green start-btn"
                    onClick={props.startTimer}
                  >
                    Start
                  </Button>
                </td>
                <td>
                  <Button
                    waves="light"
                    className="red pause-btn"
                    onClick={props.pauseTimer}
                  >
                    Pause
                  </Button>
                </td>
                <td>
                  <Button
                    waves="light"
                    className="yellow darken-3 clear-btn"
                    onClick={props.clearTimer}
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
};

TimerLayout.propTypes = {
  startTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
  clearTimer: PropTypes.func.isRequired,
  handleDismiss: PropTypes.func.isRequired,
  increaseHours: PropTypes.func.isRequired,
  decreaseHours: PropTypes.func.isRequired,
  increaseMinutes: PropTypes.func.isRequired,
  decreaseMinutes: PropTypes.func.isRequired,
  increaseSeconds: PropTypes.func.isRequired,
  decreaseSeconds: PropTypes.func.isRequired,
  timeRemaining: PropTypes.number,
  startClicked: PropTypes.bool
};

export default TimerLayout;
