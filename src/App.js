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
          onStartClick={}
          onStopClick={}
        />
      </div>
    );
  }
}

export default App;
