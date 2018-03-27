import React from 'react';
import { Row, Button, Card, Col, Table } from 'react-materialize';
import {
  secondsToHour,
  secondsToMinutes,
  seconds
} from '../../utils/humanizeTimer';
import Alert from '../Alert/Alert';
import { func, number, bool } from 'prop-types';
import TimerIncDecBtns from './TimerIncDecBtns';

const Timer = props => {
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
              <TimerIncDecBtns
                increaseHours={props.increaseHours}
                decreaseHours={props.decreaseHours}
                increaseMinutes={props.increaseMinutes}
                decreaseMinutes={props.decreaseMinutes}
                increaseSeconds={props.increaseSeconds}
                decreaseSeconds={props.decreaseSeconds}
              />
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
                    onClick={props.onStart}
                  >
                    Start
                  </Button>
                </td>
                <td>
                  <Button
                    waves="light"
                    className="red pause-btn"
                    onClick={props.onPause}
                  >
                    Pause
                  </Button>
                </td>
                <td>
                  <Button
                    waves="light"
                    className="yellow darken-3 clear-btn"
                    onClick={props.onClear}
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

Timer.propTypes = {
  onStart: func.isRequired,
  onPause: func.isRequired,
  onClear: func.isRequired,
  handleDismiss: func.isRequired,
  increaseHours: func.isRequired,
  decreaseHours: func.isRequired,
  increaseMinutes: func.isRequired,
  decreaseMinutes: func.isRequired,
  increaseSeconds: func.isRequired,
  decreaseSeconds: func.isRequired,
  timeRemaining: number,
  startClicked: bool
};

export default Timer;
