import React from 'react';
import {
  secondsToHour,
  secondsToMinutes,
  seconds
} from '../../utils/humanizeTimer';
import Alert from '../Alert/Alert';
import { func, number, bool, object } from 'prop-types';
import MessageBoard from '../MessageBoard/MessageBoard.js';
import Nav from '../Nav/Nav.js';
import './Timer.css';

class PresentTimer extends React.Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }
  render() {
    return (
      <main className="Timer">
        <Alert
          onDismiss={this.props.handleDismiss}
          show={this.props.startClicked && this.props.timeRemaining <= 0}
        />
        <Nav />
        <div className="Timer__Container">
          <div className="Timer__Counter">
            <div className="Timer__HoursCount">
              {secondsToHour(localStorage.getItem('timeRemaining'))}
            </div>
            <div className="Timer__Delimiter">:</div>
            <div className="Timer__MinutesCount">
              {secondsToMinutes(localStorage.getItem('timeRemaining'))}
            </div>
            <div className="Timer__Delimiter">:</div>
            <div className="Timer__SecondsCount">
              {seconds(localStorage.getItem('timeRemaining'))}
            </div>
          </div>
          <MessageBoard
            location={this.props.location}
            timeRemaining={this.props.timeRemaining}
          />
        </div>
      </main>
    );
  }
}

PresentTimer.propTypes = {
  onStart: func.isRequired,
  onPause: func.isRequired,
  onClear: func.isRequired,
  handleDismiss: func.isRequired,
  timeRemaining: number,
  startClicked: bool,
  location: object
};

export default PresentTimer;
