import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import LocalStorageProvider from '../LocalStorageProvider';
import MessageBoard from '../../MessageBoard/MessageBoard';
import TimeDisplay from '../../TimeDisplay/TimeDisplay';
import 'jest-localstorage-mock';

Enzyme.configure({ adapter: new Adapter() });

describe('LocalStorageProvider', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LocalStorageProvider keys={['timeRemaining']}>
        {({ timeRemaining }) => (
          <React.Fragment>
            <TimeDisplay time={timeRemaining} />
            <MessageBoard />
          </React.Fragment>
        )}
      </LocalStorageProvider>
    );
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('#componentDidMount', () => {
  it('sets the state of timeRemaining to that in localStorage', () => {
    // Arrange
    const wrapper = shallow(
      <LocalStorageProvider keys={['timeRemaining']}>
        {({ timeRemaining }) => (
          <React.Fragment>
            <TimeDisplay time={timeRemaining} />
            <MessageBoard />
          </React.Fragment>
        )}
      </LocalStorageProvider>
    );
    localStorage.setItem('timeRemaining', 10);
    // Act
    wrapper.instance().componentDidMount();
    // Assert
    expect(wrapper.state().timeRemaining).toEqual('10');
  });
});
describe('#handleStorage', () => {
  it('formats and sets the state to that in localStorage', () => {
    // Arrange
    const wrapper = shallow(
      <LocalStorageProvider keys={['timeRemaining']}>
        {({ timeRemaining }) => (
          <React.Fragment>
            <TimeDisplay time={timeRemaining} />
            <MessageBoard />
          </React.Fragment>
        )}
      </LocalStorageProvider>
    );
    localStorage.setItem('timeRemaining', 10);
    // Act
    wrapper.instance().handleStorage();
    // Assert
    expect(wrapper.state().someState.timeRemaining).toEqual('10');
  });
});
