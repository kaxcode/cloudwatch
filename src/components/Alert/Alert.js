import React from 'react';
import { func, string, bool } from 'prop-types';

export default class Alert extends React.Component {
  componentDidMount = () => {
    if (!this.props.show) {
      return;
    }

    this.handleAlert();
  };

  componentDidUpdate = prevProps => {
    if (this.props.show && this.props.show !== prevProps.show) {
      this.handleAlert();
    }
  };

  handleAlert = () => {
    alert(this.props.msg);
    this.props.onDismiss();
  };

  render() {
    return null;
  }
}

Alert.propTypes = {
  onDismiss: func.isRequired,
  msg: string,
  show: bool
};
