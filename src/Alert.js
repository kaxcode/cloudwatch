import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Alert extends Component {
  componentDidMount = () => {
    if (this.props.show) {
      this.handleAlert();
    }
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
  onDismiss: PropTypes.func.isRequired,
  msg: PropTypes.string,
  show: PropTypes.bool
};
