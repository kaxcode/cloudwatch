import React from 'react';
import { Row, Button, Card, Col } from 'react-materialize';
import { millisecondsToHuman } from '../../utils/humanizeTimer';
import PropTypes from 'prop-types';

const StopwatchLayout = props => {
  return (
    <Row>
      <Col s={12} m={3} offset="m2 l4">
        <Card className="white parent-container" textClassName="black-text">
          <h3>CloudWatch</h3>
          <h3>{millisecondsToHuman(props.counter)}</h3>
          <div className="parent-container">
            <Button
              waves="light"
              className="green timer-btn"
              onClick={props.startStopwatch}
            >
              Start
            </Button>
            <Button
              waves="light"
              className="red timer-btn"
              onClick={props.pauseStopwatch}
            >
              Pause
            </Button>
            <Button
              waves="light"
              className="yellow darken-3 timer-btn timer-clear"
              onClick={props.clearStopwatch}
            >
              Clear
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

StopwatchLayout.propTypes = {
  startStopwatch: PropTypes.func.isRequired,
  pauseStopwatch: PropTypes.func.isRequired,
  clearStopwatch: PropTypes.func.isRequired,
  counter: PropTypes.number
};

export default StopwatchLayout;
