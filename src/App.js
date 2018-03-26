import React from 'react';
import Stopwatch from './components/Stopwatch/Stopwatch.js';
import Timer from './components/Timer/Timer.js';
import { Row } from 'react-materialize';

const App = () =>
      <Row>
        <Stopwatch />
        <Timer />
      </Row>;

export default App;
