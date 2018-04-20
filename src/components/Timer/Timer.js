import React from 'react';
import { Col } from 'react-materialize';
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
import ControllerButtons from '../ControllerButtons/ControllerButtons';

const Timer = props => {
  return (
    <main className="Timer">
      <Alert
        onDismiss={props.handleDismiss}
        show={props.startClicked && props.timeRemaining <= 0}
      />
      <Col>
        <Nav />
      </Col>
      <div className="Timer__Container">
        <AdjustTimerButtonGroup
          increaseHours={props.increaseHours}
          decreaseHours={props.decreaseHours}
          increaseMinutes={props.increaseMinutes}
          decreaseMinutes={props.decreaseMinutes}
          increaseSeconds={props.increaseSeconds}
          decreaseSeconds={props.decreaseSeconds}
        />
        <div className="Timer__Counter">
          <div className="Timer__HoursCount">
            {secondsToHour(props.timeRemaining)}
          </div>
          <div className="Timer__MinutesCount">
            {secondsToMinutes(props.timeRemaining)}
          </div>
          <div className="Timer__SecondsCount">
            {seconds(props.timeRemaining)}
          </div>
        </div>
        <ControllerButtons
          onPause={props.onPause}
          onStart={props.onStart}
          onClear={props.onClear}
        />
      </div>
      <MessageBoard />
    </main>
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
