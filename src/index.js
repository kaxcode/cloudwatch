import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Stopwatch/Stopwatch.css';
import './components/Timer/Timer.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
