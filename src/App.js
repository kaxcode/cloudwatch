import React from 'react';
import StopwatchContainer from './components/Stopwatch/StopwatchContainer.js';
import TimerContainer from './components/Timer/TimerContainer.js';
import { Row } from 'react-materialize';

class App extends React.Component {
  render() {
    return (
      <Row>
        <StopwatchContainer />
        <TimerContainer />
      </Row>
    );
  }
}

export default App;
