import React from 'react';
import { Row, Button, Card, Col } from 'react-materialize';
import { millisecondsToHuman } from '../../utils/humanizeTimer';
import { func, number } from 'prop-types';
import MessageBoard from '../MessageBoard/MessageBoard.js';
import './Stopwatch.css';
import Nav from '../Nav/Nav.js';

const Stopwatch = props => {
  return (
    <Row className="Stopwatch">
      <Col>
        <Nav />
      </Col>
      <Col s={12} m={3} offset="m2 l4">
        <Card className="Stopwatch__Card" textClassName="black-text">
          <h3 className="Stopwatch__Heading">CloudWatch</h3>
          <h3 className="Stopwatch__Count">
            {millisecondsToHuman(props.counter)}
          </h3>
          <div className="Stopwatch__ButtonsContainer">
            <Button
              waves="light"
              className="Stopwatch__StartBtn green"
              id="stopwatch-start"
              onClick={props.onStart}
            >
              Start
            </Button>
            <Button
              waves="light"
              className="Stopwatch__StopBtn red"
              id="stopwatch-pause"
              onClick={props.onPause}
            >
              Pause
            </Button>
            <Button
              waves="light"
              className="Stopwatch__ClearBtn yellow darken-3"
              id="stopwatch-clear"
              onClick={props.onClear}
            >
              Clear
            </Button>
          </div>
        </Card>
      </Col>
      <MessageBoard />
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
