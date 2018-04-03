import React from 'react';
import Enzyme from 'enzyme';
import Timer from '../Timer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('Timer', () => {
  let wrapper;

  const onStartMock = jest.fn();
  const onPauseMock = jest.fn();
  const onClearMock = jest.fn();
  const handleDismissMock = jest.fn();
  const increaseHoursMock = jest.fn();
  const decreaseHoursMock = jest.fn();
  const increaseMinutesMock = jest.fn();
  const decreaseMinutesMock = jest.fn();
  const increaseSecondsMock = jest.fn();
  const decreaseSecondsMock = jest.fn();

  const props = {
          startClicked: true,
          timeRemaining: 0,
          onStart: onStartMock,
          onPause: onPauseMock,
          onClear: onClearMock,
          handleDismiss: handleDismissMock,
          increaseHours: increaseHoursMock,
          decreaseHours: decreaseHoursMock,
          increaseMinutes: increaseMinutesMock,
          decreaseMinutes: decreaseMinutesMock,
          increaseSeconds: increaseSecondsMock,
          decreaseSeconds: decreaseSecondsMock
        };

  beforeEach(() => {
    wrapper = shallow(
      <Timer {...props} />
    );
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shows alert when start is clicked and time is zero', () => {
    expect(wrapper.find('Alert').props().show).toBe(true);
  });  it('does not show alert when start is not clicked and time is zero', () => {
    wrapper = shallow(<Timer {...props} startClicked={false} />);
    expect(wrapper.find('Alert').props().show).toBe(false);
  });

  it('does not show alert when start is clicked and time is not zero', () => {
    wrapper = shallow(<Timer {...props} startClicked={false} timeRemaining={10} />);
    expect(wrapper.find('Alert').props().show).toBe(false);
  });

  it('does not show alert when start is not clicked and time is zero', () => {
    wrapper = shallow(<Timer {...props} startClicked={false} />);
    expect(wrapper.find('Alert').props().show).toBe(false);
  });

  it('does not show alert when start is clicked and time is not zero', () => {
    wrapper = shallow(<Timer {...props} startClicked={false} timeRemaining={10} />);
    expect(wrapper.find('Alert').props().show).toBe(false);
  });

  describe('the start button', () => {
    it('calls the :onStart prop when clicked', () => {
      //Arrange
      const startButton = wrapper.find('#timer-start').first();
      //Act
      startButton.simulate('click');
      //Assert
      expect(onStartMock).toHaveBeenCalled();
    });
  });

  describe('the pause button', () => {
    it('calls the :onPause prop when clicked', () => {
      //Arrange
      const pauseButton = wrapper.find('#timer-pause').first();
      //Act
      pauseButton.simulate('click');
      //Assert
      expect(onPauseMock).toHaveBeenCalled();
    });
  });

  describe('the clear button', () => {
    it('calls the :onClear prop when clicked', () => {
      //Arrange
      const clearButton = wrapper.find('#timer-clear').first();
      //Act
      clearButton.simulate('click');
      //Assert
      expect(onClearMock).toHaveBeenCalled();
    });
  });
});
