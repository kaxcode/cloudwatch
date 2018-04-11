import React from 'react';
import { func, string, bool } from 'prop-types';

const MessageOutput = props => {
  if (!props.showMessage) {
    return null;
  }
  return (
    <div className="message-output">
      <h1>{props.message}</h1>
      <div onClick={props.handleDismiss} className="message-output--cursor">
        X
      </div>
    </div>
  );
};

MessageOutput.propTypes = {
  showMessage: bool.isRequired,
  handleDismiss: func.isRequired,
  message: string.isRequired
};

export default MessageOutput;
