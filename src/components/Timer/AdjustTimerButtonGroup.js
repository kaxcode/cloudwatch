import React from 'react';
import { func } from 'prop-types';
import './AdjustTimerButtonGroup.css';

const AdjustTimerButtonGroup = props => {
if (window.name === 'presenter') {
  return null;
}

  return (
    <div className="AdjustTimerButtonGroup">
      <div className="Timer__HoursAdjustBtn__Container">
        <i
          className="fas fa-angle-up AdjustTimerButtonGroup__PlusBtn"
          id="hours-increase"
          onClick={props.increaseHours}
        />
        <i
          className="fas fa-angle-down AdjustTimerButtonGroup__MinusBtn"
          id="hours-decrease"
          onClick={props.decreaseHours}
        />
      </div>
      <div className="Timer__MinutesAdjustBtn__Container">
        <i
          className="fas fa-angle-up AdjustTimerButtonGroup__PlusBtn"
          id="minutes-increase"
          onClick={props.increaseMinutes}
        />
        <i
          className="fas fa-angle-down AdjustTimerButtonGroup__MinusBtn"
          id="minutes-decrease"
          onClick={props.decreaseMinutes}
        />
      </div>
      <div className="Timer__SecondsAdjustBtn__Container">
        <i
          className="fas fa-angle-up AdjustTimerButtonGroup__PlusBtn"
          id="seconds-increase"
          onClick={props.increaseSeconds}
        />
        <i
          className="fas fa-angle-down AdjustTimerButtonGroup__MinusBtn"
          id="seconds-decrease"
          onClick={props.decreaseSeconds}
        />
      </div>
    </div>
  );
};

AdjustTimerButtonGroup.propTypes = {
  increaseHours: func.isRequired,
  decreaseHours: func.isRequired,
  increaseMinutes: func.isRequired,
  decreaseMinutes: func.isRequired,
  increaseSeconds: func.isRequired,
  decreaseSeconds: func.isRequired
};

export default AdjustTimerButtonGroup;
