import { bool, func } from 'prop-types';
import React from 'react';
import MessageOutput from './MessageOutput';
import './MessageBoard.css';
import MessageBoardForm from './MessageBoardForm';

export default class MessageBoard extends React.Component {
  static defaultProps = {
    showInput: true,
    windowOpener: window.open.bind(window)
  };

  static propTypes = {
    showInput: bool,
    windowOpener: func.isRequired
  };

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
    this.props.windowOpener('present', 'presenter');
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
