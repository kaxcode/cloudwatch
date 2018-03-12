import React, { Component } from 'react';
import Stopwatch from './Stopwatch.js';
import Timer from './Timer.js';
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
