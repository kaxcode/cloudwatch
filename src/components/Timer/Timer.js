import React from 'react';
import { Row, Button, Card, Col, Table } from 'react-materialize';
import {
  secondsToHour,
  secondsToMinutes,
  seconds
} from '../../utils/humanizeTimer';
import Alert from '../Alert/Alert';
import { func, number, bool } from 'prop-types';
import AdjustTimerButtonGroup from './AdjustTimerButtonGroup';
import MessageBoard from '../MessageBoard/MessageBoard.js';
import Nav from '../Nav/Nav.js';
import './Timer.css';

const Timer = props => {
  return (
    <Row className="Timer">
      <Alert
        onDismiss={props.handleDismiss}
        show={props.startClicked && props.timeRemaining <= 0}
      />
      <Col>
        <Nav />
      </Col>
      <Col s={12} m={3} offset="m2 l4">
        <Card className="Timer__Card" textClassName="black-text">
          <h3 className="Timer__Heading">Timer</h3>
          <Table>
            <thead>
              <tr>
                <th className="Timer__Hours">Hours</th>
                <th className="Timer__Minutes">Minutes</th>
                <th className="Timer__Seconds">Seconds</th>
              </tr>
            </thead>
            <tbody>
              <AdjustTimerButtonGroup
                increaseHours={props.increaseHours}
                decreaseHours={props.decreaseHours}
                increaseMinutes={props.increaseMinutes}
                decreaseMinutes={props.decreaseMinutes}
                increaseSeconds={props.increaseSeconds}
                decreaseSeconds={props.decreaseSeconds}
              />
              <tr>
                <td>
                  <h1 className="Timer__HoursCount">
                    {secondsToHour(props.timeRemaining)}
                  </h1>
                </td>
                <td>
                  <h1 className="Timer__MinutesCount">
                    {secondsToMinutes(props.timeRemaining)}
                  </h1>
                </td>
                <td>
                  <h1 className="Timer__SecondsCount">
                    {seconds(props.timeRemaining)}
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    waves="light"
                    className="Timer__StartBtn green"
                    id="timer-start"
                    onClick={props.onStart}
                  >
                    Start
                  </Button>
                </td>
                <td>
                  <Button
                    waves="light"
                    className="Timer__PauseBtn red"
                    id="timer-pause"
                    onClick={props.onPause}
                  >
                    Pause
                  </Button>
                </td>
                <td>
                  <Button
                    waves="light"
                    className="Timer__ClearBtn yellow darken-3"
                    id="timer-clear"
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
      <MessageBoard />
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
