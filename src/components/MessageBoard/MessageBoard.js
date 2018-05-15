import React from 'react';
import MessageOutput from './MessageOutput';
import './MessageBoard.css';
import { bool } from 'prop-types';
import MessageBoardForm from './MessageBoardForm';

class MessageBoard extends React.Component {
  state = {
    message: ''
  };

  componentDidMount = () => {
    if (window.name === 'presenter') {
      this.setState({ message: localStorage.message });
    }
  };

  handleDismiss = () => {
    this.setState({ message: '' });
    localStorage.setItem('message', '');
  };

  handleSubmit = (e, message) => {
    e.preventDefault();
    this.setState({ message });
    localStorage.setItem('message', message);
  };

  handlePresent = () => {
    window.open('present', 'presenter');
  };

  render() {
    return (
      <div className="MessageBoard__Input">
        <MessageBoardForm
          onSubmit={this.handleSubmit}
          onPresent={this.handlePresent}
        />
        <MessageOutput
          message={localStorage.message}
          onDismiss={this.handleDismiss}
        />
      </div>
    );
  }
}

MessageBoard.defaultProp = {
  showInput: true
};

MessageBoard.propTypes = {
  showInput: bool
};

export default MessageBoard;
