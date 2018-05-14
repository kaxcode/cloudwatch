import React from 'react';
import LocalStorageProvider from './LocalStorageProvider.js';
import Timer from '../Timer/Timer.js';

class PresenterView extends React.Component {
  render() {
    return (
      <LocalStorageProvider keys={['timeRemaining']}>
        {({ timeRemaining }) => <Timer timeRemaining={timeRemaining} />}
      </LocalStorageProvider>
    );
  }
}

export default PresenterView;
