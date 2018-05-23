import React from 'react';
import PropTypes from 'prop-types';

class WindowEvent extends React.PureComponent {
  static propTypes = {
    event: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.addEvent();
  }

  componentWillUpdate() {
    this.removeEvent();
  }

  componentDidUpdate() {
    this.addEvent();
  }

  componentWillUnmount() {
    this.removeEvent();
  }

  render() {
    return null;
  }

  addEvent() {
    const { event, handler } = this.props;
    window.addEventListener(event, handler);
  }

  removeEvent() {
    const { event, handler } = this.props;
    window.removeEventListener(event, handler);
  }
}

export default WindowEvent;
