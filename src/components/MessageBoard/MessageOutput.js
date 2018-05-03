import React from 'react';
import { func, bool } from 'prop-types';
import './MessageBoard.css';
import PropTypes from 'prop-types';

const MessageOutput = props => {
  if (!props.showMessage) {
    return null;
  }
  if (localStorage.message === '') {
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
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default MessageOutput;
