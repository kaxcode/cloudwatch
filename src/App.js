import React from 'react';
import StopwatchContainer from './components/Stopwatch/StopwatchContainer.js';
import TimerContainer from './components/Timer/TimerContainer.js';
import { Row, Col } from 'react-materialize';
import CloudyTimerButton from './assets/cloudy_timer_button.svg';
import CloudyStopwatchButton from './assets/cloudy_stopwatch_button.svg';

class App extends React.Component {
  state = {
    timerClicked: false,
    stopwatchClicked: false
  }

  handleTimerClick = (e) => {
    e.preventDefault();
    this.setState({ timerClicked: true });
  }

  handleStopwatchClick = (e) => {
    e.preventDefault();
    this.setState({ stopwatchClicked: true });
  }

  render() {
    if(!this.state.timerClicked && !this.state.stopWatchClicked) {
      return <Row>
                <Col onClick={this.handleTimerClick}>
                  <img src={CloudyTimerButton} />
                </Col>
                <Col onClick={this.handleStopwatchClick}>
                  <img src={CloudyStopwatchButton} />
                </Col>
              </Row>;
    } else if(this.state.timerClicked && !this.state.stopwatchClicked ) {
      return <TimerContainer />;
    } else if(this.state.stopwatchClicked && !this.state.timerClicked) {
      return <StopwatchContainer />;
    } else {
      return <div><h4>Something went wrong. Please reload the page</h4></div>;
    }
  }
}

export default App;
