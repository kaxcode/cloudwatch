import React from 'react';
import { func, bool } from 'prop-types';
import CloudyAlert from '../../assets/alert_cloud.svg';
import './Alert.css';

const Alert = props => {
  if (!props.show) {
    return null;
  }
  return (
    <button onClick={props.onDismiss} className="Alert">
      <img src={CloudyAlert} alt="Time is up, click this to close alert" />
    </button>
  );
};

Alert.propTypes = {
  onDismiss: func.isRequired,
  show: bool
};

export default Alert;
