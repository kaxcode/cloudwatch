import React from 'react';
import LocalStorageProvider from './LocalStorageProvider.js';
import MessageBoard from '../MessageBoard/MessageBoard';
import Nav from '../Nav/Nav.js';
import TimeDisplay from '../TimeDisplay/TimeDisplay';

class PresenterView extends React.Component {
  render() {
    return (
      <main>
        /* istanbul ignore next */
        <Nav />
        <LocalStorageProvider keys={['timeRemaining']}>
          {({ timeRemaining }) => (
            <React.Fragment>
              <TimeDisplay time={timeRemaining} />
              <MessageBoard />
            </React.Fragment>
          )}
        </LocalStorageProvider>
      </main>
    );
  }
}

export default PresenterView;
