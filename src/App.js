import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <Timer />;
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h2
          className=''
        >
          Timer
        </h2>
        <TimerButton
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
      </div>
    );
  }
}

class TimerButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <div
          className=''
          onClick={this.props.onStopClick}
        >
          Stop
        </div>
      );
    } else {
      return (
        <div
          className=''
          onClick={this.props.onStartClick}
        >
          Start
        </div>
      );
    }
  }
}

export default App;
