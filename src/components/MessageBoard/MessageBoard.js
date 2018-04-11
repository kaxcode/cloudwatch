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

  onChange = e => {
    this.setState({ message: e.target.value });
  };

  onSubmit = e => {
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
        <form onSubmit={this.onSubmit}>
          <input id="message-input" onChange={this.onChange} />
          <button id="message-submit-button">submit</button>
        </form>
      </div>
    );
  }
}

export default MessageBoard;
