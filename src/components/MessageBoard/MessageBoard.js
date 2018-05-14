import React from 'react';
import MessageOutput from './MessageOutput';
import './MessageBoard.css';
import { object, number } from 'prop-types';
import MessageBoardForm from './MessageBoardForm';

class MessageBoard extends React.Component {
  state = {
    showMessage: false,
    message: ''
  };

  componentDidMount = () => {
    // check if window is parent or presenter
    if (window.name === 'presenter') {
      this.setState({ message: localStorage.message });
    }
  };

  handleDismiss = () => {
    this.setState({ showMessage: false });
    localStorage.setItem('message', '');
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ showMessage: true });
    localStorage.setItem('message', this.state.message);
  };

  handlePresent = () => {
    localStorage.setItem('message', this.state.message);
      this.props.location.pathname === '/timer'
      ? localStorage.setItem('timeRemaining', this.props.timeRemaining)
      : localStorage.setItem('counter', this.props.counter);
    window.open('present', 'presenter');
  };

  render() {
    return (
      <div className="MessageBoard__Input">
        <MessageOutput
          message={this.state.message}
          showMessage={this.state.showMessage}
          handleDismiss={this.handleDismiss}
        />
        <MessageBoardForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onPresent={this.handlePresent}
        />
        <MessageOutput
          message={localStorage.message || ''}
          showMessage
          handleDismiss={this.handleDismiss}
        />
      </div>
    );
  }
}

MessageBoard.propTypes = {
  location: object,
  timeRemaining: number,
  counter: number
};

export default MessageBoard;
