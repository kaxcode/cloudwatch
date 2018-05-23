import React from 'react';
import LocalStorageProvider from './LocalStorageProvider.js';
import MessageBoard from '../MessageBoard/MessageBoard';
import Nav from '../Nav/Nav.js';
import TimeDisplay from '../TimeDisplay/TimeDisplay';

const PresenterView = () => (
  <main>
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

export default PresenterView;
