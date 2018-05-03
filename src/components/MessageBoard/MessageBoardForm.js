import React from 'react';
import { func } from 'prop-types';
import './MessageBoard.css';

const MessageOutput = props => {
  if (window.name === 'presenter') {
    return null;
  }

  return (
    <form id="message-submit-form" onSubmit={props.onSubmit}>
      <input id="message-input" onChange={props.onChange} />
      <button id="message-submit-button">Post Message</button>
      <button onClick={props.onPresent}>Open Presentation Window</button>
    </form>
  );
};

MessageOutput.propTypes = {
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  onPresent: func.isRequired
};

export default MessageOutput;
