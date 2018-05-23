import React from 'react';
import { func } from 'prop-types';
import './MessageBoard.css';
import PropTypes from 'prop-types';

const MessageOutput = props => {
  if(!props.message) {
    return null;
  }
  return (
    <div className="MessageBoard__Output">
      <h1>{props.message}</h1>
      <button onClick={props.onDismiss}>X</button>
    </div>
  );
};

MessageOutput.propTypes = {
  onDismiss: func.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default MessageOutput;
