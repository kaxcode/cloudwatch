import React from 'react';
import './ControllerButtons.css';
import { func, bool } from 'prop-types';

const ControllerButtons = props => {
  return (
    <div className="ControllerButtons">
      <button
        waves="light"
        className="ControllerBtn__Start"
        id="timer-start"
        onClick={props.onStart}
      >
        Start
      </button>

      <button
        waves="light"
        className="ControllerBtn__Pause"
        id="timer-pause"
        onClick={props.onPause}
      >
        Pause
      </button>

      <button
        waves="light"
        className="ControllerBtn__Clear"
        id="timer-clear"
        onClick={props.onClear}
      >
        Clear
      </button>
    </div>
  );
};

ControllerButtons.propTypes = {
  onStart: func.isRequired,
  onPause: func.isRequired,
  onClear: func.isRequired,
  show: bool
};

export default ControllerButtons;
