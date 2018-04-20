import React from 'react';
import './ControllerButtons.css';
import { Button } from 'react-materialize';
import { func, bool } from 'prop-types';

const ControllerButtons = props => {
  return (
    <div className="ControllerButtons">
      <Button
        waves="light"
        className="ControllerBtn__Start green"
        id="timer-start"
        onClick={props.onStart}
      >
        Start
      </Button>

      <Button
        waves="light"
        className="ControllerBtn__Pause red"
        id="timer-pause"
        onClick={props.onPause}
      >
        Pause
      </Button>

      <Button
        waves="light"
        className="ControllerBtn__Clear yellow darken-3"
        id="timer-clear"
        onClick={props.onClear}
      >
        Clear
      </Button>
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
