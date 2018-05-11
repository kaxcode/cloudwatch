import React from 'react';
import { millisecondsToHuman } from '../../utils/humanizeTimer';
import { func, number, bool, object } from 'prop-types';
import './Stopwatch.css';
import Nav from '../Nav/Nav.js';

class PresentStopwatch extends React.Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }
  render() {
    return (
      <main className="Stopwatch">
        <Nav />
        <div className="Stopwatch__Container">
          <h3 className="Stopwatch__Count">
            {millisecondsToHuman(localStorage.getItem('counter'))}
          </h3>
        </div>
      </main>
    );
  }
}

PresentStopwatch.propTypes = {
  onStart: func.isRequired,
  onPause: func.isRequired,
  onClear: func.isRequired,
  handleDismiss: func.isRequired,
  timeRemaining: number,
  startClicked: bool,
  location: object
};

export default PresentStopwatch;
