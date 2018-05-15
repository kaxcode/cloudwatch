import React from 'react';
import { func } from 'prop-types';
import './MessageBoard.css';

export default class MessageOutput extends React.Component {
  static propTypes = {
    onSubmit: func.isRequired,
    onPresent: func.isRequired
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const message = this.input.value.trim();
    this.props.onSubmit(e, message);
  }
  render() {
    return (
      <form id="message-submit-form" onSubmit={this.handleSubmit}>
        <input id="message-input" ref={(i) => this.input = i}/>
        <button id="message-submit-button">Post Message</button>
        <button onClick={this.props.onPresent}>Open Presentation Window</button>
      </form>
    );
  }
}
