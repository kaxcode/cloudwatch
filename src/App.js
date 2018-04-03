import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import StopwatchContainer from './components/Stopwatch/StopwatchContainer.js';
import TimerContainer from './components/Timer/TimerContainer.js';
import { Row } from 'react-materialize';
import CloudyTimerButton from './assets/cloudy_timer_button.svg';
import CloudyStopwatchButton from './assets/cloudy_stopwatch_button.svg';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component ={Home} />
      <Route path="/timer" component ={TimerContainer} />
      <Route path="/stopwatch" component ={StopwatchContainer} />
    </div>
  </Router>
);

const Home = () => (
  <Row>
    <Link to="/timer">
      <img src={CloudyTimerButton} />
    </Link>
    <Link to="stopwatch">
      <img src={CloudyStopwatchButton} />
    </Link>
  </Row>
);

export default App;
