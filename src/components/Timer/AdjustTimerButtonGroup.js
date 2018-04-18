import React from 'react';
import { Button } from 'react-materialize';
import { func } from 'prop-types';
import './AdjustTimerButtonGroup.css';

const AdjustTimerButtonGroup = props => {
  return (
    <tr className="AdjustTimerButtonGroup">
      <td>
        <div className="AdjustTimerButtonGroup__Container">
          <Button
            id="hours-increase"
            className="AdjustTimerButtonGroup__PlusBtn blue"
            onClick={props.increaseHours}
          >
            +
          </Button>
          <Button
            id="hours-decrease"
            className="AdjustTimerButtonGroup__MinusBtn blue"
            onClick={props.decreaseHours}
          >
            -
          </Button>
        </div>
      </td>
      <td>
        <div className="AdjustTimerButtonGroup__Container">
          <Button
            id="minutes-increase"
            className="AdjustTimerButtonGroup__PlusBtn blue"
            onClick={props.increaseMinutes}
          >
            +
          </Button>
          <Button
            id="minutes-decrease"
            className="AdjustTimerButtonGroup__MinusBtn blue"
            onClick={props.decreaseMinutes}
          >
            -
          </Button>
        </div>
      </td>
      <td>
        <div className="AdjustTimerButtonGroup__Container">
          <Button
            waves="light"
            id="seconds-increase"
            className="AdjustTimerButtonGroup__PlusBtn blue"
            onClick={props.increaseSeconds}
          >
            +
          </Button>
          <Button
            id="seconds-decrease"
            className="AdjustTimerButtonGroup__MinusBtn blue"
            onClick={props.decreaseSeconds}
          >
            -
          </Button>
        </div>
      </td>
    </tr>
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
