import React from 'react';
import { func, string, bool } from 'prop-types';
import './MessageBoard.css';

const MessageOutput = props => {
  if (!props.showMessage) {
    return null;
  }
  return (
    <div className="MessageBoard__Output">
      <h1>{props.message}</h1>
      <button onClick={props.handleDismiss}>X</button>
    </div>
  );
};

MessageOutput.propTypes = {
  showMessage: bool.isRequired,
  handleDismiss: func.isRequired,
  message: string.isRequired
};

export default MessageOutput;
