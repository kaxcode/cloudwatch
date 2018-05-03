import React from 'react';
import Enzyme from 'enzyme';
import TimerContainer from '../TimerContainer';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-localstorage-mock';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('Timer', () => {
  let wrapper;
  const hours = 3600;
  const minutes = 60;

  function increaseHoursMock() {}
  function decreaseHoursMock() {}
  function increaseMinutesMock() {}
  function decreaseMinutesMock() {}
  function increaseSecondsMock() {}
  function decreaseSecondsMock() {}
  function handleStartMock() {}
  function handlePauseMock() {}
  function handleClearMock() {}

  beforeEach(() => {
    wrapper = shallow(
      <TimerContainer
        increaseHours={increaseHoursMock}
        decreaseHours={decreaseHoursMock}
        increaseMinutes={increaseMinutesMock}
        decreaseMinutes={decreaseMinutesMock}
        increaseSeconds={increaseSecondsMock}
        decreaseSeconds={decreaseSecondsMock}
        handleStart={handleStartMock}
        handlePause={handlePauseMock}
        handleClear={handleClearMock}
      />
    );
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Increment Buttons', () => {
    describe('clicking the + hours button', () => {
      it('increases the hours in the time remaining', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'increaseHours');

        // Act
        wrapper.instance().increaseHours();
        wrapper.instance().increaseHours();
        wrapper.instance().increaseHours();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3 * hours);
        expect(wrapper.state().timeRemaining).not.toBe(1 * hours);
        expect(spy).toHaveBeenCalled();
      });

      it('cannot let hours increase above 24', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'increaseHours');
        wrapper.setState({ timeRemaining: 24 * hours });

        // Act
        wrapper.instance().increaseHours();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(24 * hours);
        expect(wrapper.state().timeRemaining).not.toBe(24 * hours + 1);
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('clicking the - hours button', () => {
      it('decreases the hours in the time remaining', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'decreaseHours');

        wrapper.setState({ timeRemaining: 22 * hours });

        // Act
        wrapper.instance().decreaseHours();
        wrapper.instance().decreaseHours();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(20 * hours);
        expect(wrapper.state().timeRemaining).not.toBe(21 * hours);
        expect(spy).toHaveBeenCalled();
      });

      it('cannot let hours decrease below 0', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'decreaseHours');
        wrapper.setState({ timeRemaining: 1 * hours });

        // Act
        wrapper.instance().decreaseHours();
        wrapper.instance().decreaseHours();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1 * hours);
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('clicking the + minutes button', () => {
      it('increases the minutes in the time remaining', () => {
        // Arrange
        wrapper.setState({ timeRemaining: 0 });
        const spy = jest.spyOn(wrapper.instance(), 'increaseMinutes');

        // Act
        wrapper.instance().increaseMinutes();
        wrapper.instance().increaseMinutes();
        wrapper.instance().increaseMinutes();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3 * minutes);
        expect(wrapper.state().timeRemainingg).not.toBe(1 * minutes);
        expect(spy).toHaveBeenCalled();
      });

      it('cannot let minutes increase above 59', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'increaseMinutes');
        wrapper.setState({ timeRemaining: 59 * minutes });

        // Act
        wrapper.instance().increaseMinutes();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(60 * minutes);
        expect(wrapper.state().timeRemaining).not.toBe(61 * minutes);
        expect(spy).toHaveBeenCalled();
      });

      it('does nothing when remaining time is at maximum', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'increaseMinutes');
        wrapper.setState({ timeRemaining: 86400 });

        // Act
        wrapper.instance().increaseMinutes();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(86400);
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('clicking the - minutes button', () => {
      it('decreases the minutes in the time remaining', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'decreaseMinutes');
        wrapper.setState({ timeRemaining: 22 * minutes });

        // Act
        wrapper.instance().decreaseMinutes();
        wrapper.instance().decreaseMinutes();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(20 * minutes);
        expect(wrapper.state().timeRemaining).not.toBe(21 * minutes);
        expect(spy).toHaveBeenCalled();
      });

      it('cannot let minutes decrease below 0', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'decreaseMinutes');
        wrapper.setState({ timeRemaining: 1 * minutes });

        // Act
        wrapper.instance().decreaseMinutes();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1 * minutes);
        expect(spy).toHaveBeenCalled();
      });

      it('returns when decreasing below min time', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'decreaseMinutes');

        wrapper.setState({ timeRemaining: 0 });

        // Act
        wrapper.instance().decreaseMinutes();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1);
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('clicking the + seconds button', () => {
      it('increases the seconds in the time remaining', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'increaseSeconds');

        // Act
        wrapper.instance().increaseSeconds();
        wrapper.instance().increaseSeconds();
        wrapper.instance().increaseSeconds();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3);
        expect(wrapper.state().timeRemainingg).not.toBe(1);
        expect(spy).toHaveBeenCalled();
      });

      it('cannot let seconds increase above 60', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'increaseSeconds');
        wrapper.setState({ timeRemaining: 24 * hours });

        // Act
        wrapper.instance().increaseSeconds();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(24 * hours);
        expect(wrapper.state().timeRemaining).not.toBe(24 * hours + 1);
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('clicking the - seconds button', () => {
      it('decreases the seconds in the time remaining', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'decreaseSeconds');
        wrapper.setState({ timeRemaining: 32 });

        // Act
        wrapper.instance().decreaseSeconds();
        wrapper.instance().decreaseSeconds();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(30);
        expect(wrapper.state().timeRemaining).not.toBe(31);
        expect(spy).toHaveBeenCalled();
      });

      it('cannot let seconds decrease below 0', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'decreaseSeconds');
        wrapper.setState({ timeRemaining: 1 });

        // Act
        wrapper.instance().decreaseSeconds();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1);
        expect(spy).toHaveBeenCalled();
      });

      it('returns when decreasing below min time', () => {
        // Arrange
        const spy = jest.spyOn(wrapper.instance(), 'decreaseSeconds');

        wrapper.setState({ timeRemaining: 0 });

        // Act
        wrapper.instance().decreaseSeconds();

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1);
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('when the Start button is clicked', () => {
    it('starts the timer', () => {
      // Arrange
      const spy = jest.spyOn(wrapper.instance(), 'handleStart');
      wrapper.setState({ timeRemaining: 62 });

      // Act
      wrapper.instance().handleStart();

      // Assert
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(clearInterval).toHaveBeenCalledTimes(1);
      expect(wrapper.state().startClicked).toBe(true);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      expect(spy).toHaveBeenCalled();
    });

    it('cannot be clicked again', () => {
      // Arrange
      wrapper.setState({ timeRemaining: 23 });
      const spy = jest.spyOn(wrapper.instance(), 'handlePause');
      wrapper.instance().handleStart();

      // Act
      wrapper.instance().handlePause();

      // Assert
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      expect(spy).toHaveBeenCalled();
      wrapper.setState({ startClicked: true });

      // Act
      wrapper.instance().handleStart();
      // Assert
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(clearInterval).toHaveBeenCalledTimes(2);
      expect(wrapper.state().startClicked).toBe(true);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('when the Pause button is clicked', () => {
    it('pauses the tick function from changing the timeRemaining state ', () => {
      // Arrange
      wrapper.setState({ startClicked: true });
      wrapper.setState({ timeRemaining: 56 });
      const spy = jest.spyOn(wrapper.instance(), 'handlePause');

      // Act
      wrapper.instance().handlePause();

      // Assert
      expect(clearInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenCalledTimes(0);
      expect(wrapper.state().timeRemaining).toBe(56);
      expect(wrapper.state().startClicked).toBe(false);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('when the Clear button is clicked', () => {
    it('clears the the Hours, Minutes, Seconds state', () => {
      // Arrange
      const spy = jest.spyOn(wrapper.instance(), 'handleClear');
      wrapper.setState({ timeRemaining: 19 * hours });

      // Act
      wrapper.instance().handleClear();

      // Assert
      expect(wrapper.state().timeRemaining).toEqual(0);
      expect(wrapper.state().timeRemaining).not.toBe(23 * hours);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#tick', () => {
    it('decreases the time remaining by 1 second', () => {
      // Arrange
      wrapper.setState({ timeRemaining: 20 });

      // Act
      wrapper.instance().tick();

      // Assert
      expect(wrapper.state().timeRemaining).toEqual(19);
      expect(wrapper.state().timeRemaining).not.toBe(20);
      expect(wrapper.state().timeRemaining).not.toBe(21);
    });

    it('stops ticking if timeRemaining is 0', () => {
      // Arrange
      wrapper.setState({ timeRemaining: 0 });

      // Act
      wrapper.instance().tick();

      // Assert
      expect(wrapper.state().timeRemaining).toEqual(0);
      expect(wrapper.state().timeRemaining).not.toBe(-1);
      expect(wrapper.state().timeRemaining).not.toBe(1);
    });
  });

  describe('#handleDismiss', () => {
    it('sets the startClicked state to false', () => {
      // Arrange
      wrapper.setState({ timeRemaining: 0 });

      // Act
      wrapper.instance().handleDismiss();

      // Assert
      expect(wrapper.state().startClicked).toBe(false);
    });
  });

  describe('#componentDidMount', () => {
    it('sets an initial timeRemaining value from localstorage when available', () => {
      // Arrange
      const initialTime = Math.round(Math.random() * 10000);
      localStorage.setItem('timeRemaining', initialTime);

      // Act
      const subject = shallow(<TimerContainer />);

      // Assert
      expect(subject.state().timeRemaining).toEqual(initialTime);
    });
    it('sets a sane default timeRemaining value', () => {
      // Arrange
      localStorage.setItem('timeRemaining', null);

      // Act
      const subject = shallow(<TimerContainer />);

      // Assert
      expect(subject.state().timeRemaining).toEqual(0);
    });
  });

  describe('#componentDidUpdate', () => {
    it('sets state to localStorage value ', () => {
      // Arrange
      localStorage.setItem('timeRemaining', 1214);
      wrapper.setState({ timeRemaining: 1214 });

      // Act
      wrapper.update();

      // Assert
      expect(localStorage.getItem('timeRemaining')).toEqual('1214');
    });
    it('does NOT call #handleStart if not in presenter view and already started', () => {
      //Arrange
      const spy = jest.spyOn(wrapper.instance(), 'handleStart');
      wrapper.setState({ timeRemaining: 1214 });

      //Act
      wrapper.update();
      //Assert
      expect(spy).not.toHaveBeenCalled();
    });
    it('checks the window and state to call #handleStart if started in parent view', () => {
      const spy = jest.spyOn(wrapper.instance(), 'handleStart');
      global.window.name = 'presenter';
      wrapper.setState({ timeRemaining: 100 });
      wrapper.instance().componentDidUpdate();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#componentWillUnmount', () => {
    it('resets the stored state in localstorage', () => {
      // Arrange
      localStorage.setItem('timeRemaining', 999);

      // Act
      wrapper.instance().componentWillUnmount();

      // Assert
      expect(localStorage.getItem('timeRemaining')).toEqual('0');
    });
  });
});
