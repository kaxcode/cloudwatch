import React from 'react';
import Alert from '../Alert/Alert';
import { oneOfType, string, func, number, bool, object } from 'prop-types';
import AdjustTimerButtonGroup from './AdjustTimerButtonGroup';
import MessageBoard from '../MessageBoard/MessageBoard.js';
import Nav from '../Nav/Nav.js';
import './Timer.css';
import ControllerButtons from '../ControllerButtons/ControllerButtons';
import TimeDisplay from '../TimeDisplay/TimeDisplay';

const Timer = props => {
  return (
    <main className="Timer">
      <Alert
        onDismiss={props.handleDismiss}
        show={props.startClicked && props.timeRemaining <= 0}
      />
      <Nav />
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
          <TimeDisplay time={props.timeRemaining} />
        </div>
        <ControllerButtons
          onPause={props.onPause}
          onStart={props.onStart}
          onClear={props.onClear}
        />
        <MessageBoard
          location={props.location}
          timeRemaining={props.timeRemaining}
        />
      </div>
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
  timeRemaining: oneOfType([number, string]),
  startClicked: bool,
  location: object
};

export default Timer;
