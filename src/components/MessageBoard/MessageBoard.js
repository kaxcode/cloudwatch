import React from 'react';
import MessageOutput from './MessageOutput';

class MessageBoard extends React.Component {
  state = {
    showMessage: false,
    message: ''
  };

  handleDismiss = () => {
    this.setState({ showMessage: false });
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ showMessage: true });
  };

  render() {
    return (
      <div className="message-input">
        <MessageOutput
          message={this.state.message}
          showMessage={this.state.showMessage}
          handleDismiss={this.handleDismiss}
        />
        <form id="message-submit-form" onSubmit={this.handleSubmmit}>
          <input id="message-input" onChange={this.handleChange} />
          <button id="message-submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default MessageBoard;
