import React from 'react';
import { Row, Button, Card, Col } from 'react-materialize';
import { millisecondsToHuman } from '../../utils/humanizeTimer';
import PropTypes from 'prop-types';

const StopwatchLayout = (props) => {

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
              onClick={props.start}
            >
              Start
            </Button>
            <Button
              waves="light"
              className="red timer-btn"
              onClick={props.pause}
            >
              Pause
            </Button>
            <Button
              waves="light"
              className="yellow darken-3 timer-btn timer-clear"
              onClick={props.clear}
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
  start: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  counter: PropTypes.number
};


export default StopwatchLayout;
