import React from 'react';
import { func, number, bool, object } from 'prop-types';
import MessageBoard from '../MessageBoard/MessageBoard';
import './Stopwatch.css';
import Nav from '../Nav/Nav.js';
import ControllerButtons from '../ControllerButtons/ControllerButtons';
import TimeDisplay from '../TimeDisplay/TimeDisplay';

const Stopwatch = props => {
  return (
    <main className="Stopwatch">
      <Nav />
      <div className="Stopwatch__Container">
        <TimeDisplay time={props.counter}/>
        <ControllerButtons
          onPause={props.onPause}
          onStart={props.onStart}
          onClear={props.onClear}
        />
        <MessageBoard/>
      </div>
    </main>
  );
};

Stopwatch.propTypes = {
  onStart: func.isRequired,
  onPause: func.isRequired,
  onClear: func.isRequired,
  counter: number,
  clicked: bool,
  location: object
};

Stopwatch.defaultProps = {
  counter: 0
};
export default Stopwatch;
