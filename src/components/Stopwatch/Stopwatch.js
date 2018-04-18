import React from 'react';
import { millisecondsToHuman } from '../../utils/humanizeTimer';
import { func, number, bool } from 'prop-types';
import MessageBoard from '../MessageBoard/MessageBoard.js';
import './Stopwatch.css';
import Nav from '../Nav/Nav.js';
import ControllerButtons from '../ControllerButtons/ControllerButtons';

const Stopwatch = props => {
  return (
    <main className="Stopwatch">
      <Nav />
      <div s={12} m={3} offset="m2 l4">
        <div className="Stopwatch__Card" textClassName="black-text">
          <h3 className="Stopwatch__Count">
            {millisecondsToHuman(props.counter)}
          </h3>
          <ControllerButtons
            onPause={props.onPause}
            onStart={props.onStart}
            onClear={props.onClear}
          />
        </div>
      </div>
      <MessageBoard />
    </main>
  );
};

Stopwatch.propTypes = {
  onStart: func.isRequired,
  onPause: func.isRequired,
  onClear: func.isRequired,
  counter: number,
  clicked: bool
};

Stopwatch.defaultProps = {
  counter: 0
};
export default Stopwatch;
