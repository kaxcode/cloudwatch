import React from 'react';
import { func, string, bool } from 'prop-types';

<<<<<<< HEAD
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
=======
const Alert = props => {
  return (
    props.show && (
      <div
        onClick={props.onDismiss}
        style={{
          textAlign: 'center',
          marginTop: '20px',
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          zIndex: 10000000,
          position: 'absolute'
        }}
      >
        <img src={CloudyAlert} alt="cloud-shaped button to timer" />
      </div>
    )
  );
};
>>>>>>> dcb2535... Update Alert component in Timer

Alert.propTypes = {
  onDismiss: func.isRequired,
  msg: string,
  show: bool
};

export default Alert;
