import { millisecondsToHuman } from '../../utils/humanizeTimer';
import { number, oneOfType, string } from 'prop-types';
import React from 'react';

const TimeDisplay = ({time}) => (
  <h3 className="Stopwatch__Count">
    {millisecondsToHuman(time)}
  </h3>
);

TimeDisplay.propTypes = {
  time: oneOfType([number, string])
};

export default TimeDisplay;
