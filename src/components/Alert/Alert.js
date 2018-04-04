import React from 'react';
import { func, string, bool } from 'prop-types';
import CloudyAlert from '../../assets/alert_cloud.svg';

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

Alert.propTypes = {
  onDismiss: func.isRequired,
  msg: string,
  show: bool
};

export default Alert;
