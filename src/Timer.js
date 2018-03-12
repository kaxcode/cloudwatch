import React from 'react';
import { Row, Button, Card, Col, Table } from 'react-materialize';

class Timer extends React.Component {
  render() {
    return (
      <Row>
      {console.log(this)}
        <Col s={12} m={3} offset="m2 l4">
          <Card className="white parent-container" textClassName="black-text">
            <h3>Timer</h3>
            <Table className="setters">
              <thead>
                <tr>
                  <th className="timer-heading">Hours</th>
                  <th className="timer-heading">Minutes</th>
                  <th className="timer-heading">Seconds</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="hours-set">
                      <Button className="plus-btn blue">+</Button>
                      <Button className="minus-btn blue">-</Button>
                    </div>
                  </td>
                  <td>
                    <div className="minutes-set">
                      <Button className="plus-btn blue">+</Button>
                      <Button className="minus-btn blue">-</Button>
                    </div>
                  </td>
                  <td>
                    <div className="seconds-set">
                      <Button waves="light" className="plus-btn blue">+</Button>
                      <Button className="minus-btn blue">-</Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1 className="timer-count">00</h1>
                  </td>
                  <td>
                    <h1 className="timer-count">00</h1>
                  </td>
                  <td>
                    <h1 className="timer-count">00</h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button waves="light" className="green start-btn">
                      Start
                    </Button>
                  </td>
                  <td>
                    <Button waves="light" className="red pause-btn">
                      Pause
                    </Button>
                  </td>
                  <td>
                    <Button
                      waves="light"
                      className="yellow darken-3 clear-btn"
                      onClick={this.clearTimer}
                    >
                      Clear
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Timer;
