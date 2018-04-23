import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StopwatchContainer from './components/Stopwatch/StopwatchContainer.js';
import TimerContainer from './components/Timer/TimerContainer.js';
import Home from './components/Home/Home';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/timer" component={TimerContainer} />
      <Route path="/stopwatch" component={StopwatchContainer} />
    </div>
  </Router>
);

export default App;
