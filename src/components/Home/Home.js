import React from 'react';
import { Link } from 'react-router-dom';
import CloudyTimerButton from '../../assets/cloudy_timer_button.svg';
import CloudyStopwatchButton from '../../assets/cloudy_stopwatch_button.svg';
import './Home.css';

const Home = () => (
  <div className="Home">
    <Link to="/timer" className="Home__TimerBtn">
      <img src={CloudyTimerButton} alt="cloud-shaped button to timer" />
    </Link>
    <Link to="/stopwatch" className="Home__StopwatchBtn">
      <img src={CloudyStopwatchButton} alt="cloud-shaped button to timer" />
    </Link>
  </div>
);

export default Home;
