import React from 'react';
import { Button } from 'react-materialize';
import { func } from 'prop-types';

const AdjustTimerButtonGroup = props => {
  return (
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
