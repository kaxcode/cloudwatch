import React from 'react';
import { Row, Button, Card, Col } from 'react-materialize';
import { millisecondsToHuman } from '../../utils/humanizeTimer';
import { func, number } from 'prop-types';

const Stopwatch = props => {
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
              id="stopwatch-start"
              onClick={props.onStart}
            >
              Start
            </Button>
            <Button
              waves="light"
              className="red timer-btn"
              id="stopwatch-pause"
              onClick={props.onPause}
            >
              Pause
            </Button>
            <Button
              waves="light"
              className="yellow darken-3 timer-btn timer-clear"
              id="stopwatch-clear"
              onClick={props.onClear}
            >
              Clear
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

Stopwatch.propTypes = {
  onStart: func.isRequired,
  onPause: func.isRequired,
  onClear: func.isRequired,
  counter: number
};

Stopwatch.defaultProps = {
  counter: 0
};
export default Stopwatch;
