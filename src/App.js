import React, { Component } from 'react';
import Stopwatch from './components/Stopwatch/Stopwatch.js';
import Timer from './components/Timer/Timer.js';
import { Row } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <Row>
        <Stopwatch />
        <Timer />
      </Row>
    );
  }
}

export default App;
