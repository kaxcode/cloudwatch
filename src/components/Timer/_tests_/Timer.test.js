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
  const hours = 3600;
  const minutes = 60;

  beforeEach(() => {
    wrapper = shallow(<Timer />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('Increment Buttons', () => {
    describe('clicking the + hours button', () => {
      it('increases the hours in the time remaining', () => {
        // Arrange
        const button = wrapper.find('#hours-increase').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3 * hours);
        expect(wrapper.state().timeRemaining).not.toBe(1 * hours);
      });

      it('cannot let hours increase above 23', () => {
        // Arrange
        const button = wrapper.find('#hours-increase').first();
        wrapper.setState({ timeRemaining: 23 * hours });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(23 * hours);
        expect(wrapper.state().timeRemaining).not.toBe(24 * hours);
      });
    });

    describe('clicking the - hours button', () => {
      it('decreases the hours in the time remaining', () => {
        // Arrange
        const button = wrapper.find('#hours-decrease').first();
        wrapper.setState({ timeRemaining: 22 * hours });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(20 * hours);
        expect(wrapper.state().timeRemaining).not.toBe(21 * hours);
      });

      it('cannot let hours decrease below 0', () => {
        // Arrange
        const button = wrapper.find('#hours-decrease').first();
        wrapper.setState({ timeRemaining: 1 * hours });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3600);
        expect(wrapper.state().timeRemaining).not.toBe(-1 * hours);
      });
    });

    describe('clicking the + minutes button', () => {
      it('increases the minutes in the time remaining', () => {
        // Arrange
        const button = wrapper.find('#minutes-increase').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3 * minutes);
        expect(wrapper.state().timeRemainingg).not.toBe(1 * minutes);
      });

      it('cannot let minutes increase above 59', () => {
        // Arrange
        const button = wrapper.find('#minutes-increase').first();
        wrapper.setState({ timeRemaining: 59 * minutes });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(60 * minutes);
        expect(wrapper.state().timeRemaining).not.toBe(61 * minutes);
      });

      it('does nothing when remaining time is at maximum', () => {
        // Arrange
        const button = wrapper.find('#minutes-increase').first();
        wrapper.setState({ timeRemaining: 86399 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(86399);
      });
    });

    describe('clicking the - minutes button', () => {
      it('decreases the minutes in the time remaining', () => {
        // Arrange
        const button = wrapper.find('#minutes-decrease').first();
        wrapper.setState({ timeRemaining: 22 * minutes });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(20 * minutes);
        expect(wrapper.state().timeRemaining).not.toBe(21 * minutes);
      });

      it('cannot let minutes decrease below 0', () => {
        // Arrange
        const button = wrapper.find('#minutes-decrease').first();
        wrapper.setState({ timeRemaining: 1 * minutes });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(60);
        expect(wrapper.state().timeRemaining).not.toBe(-1 * minutes);
      });
    });

    describe('clicking the + seconds button', () => {
      it('increases the seconds in the time remaining', () => {
        // Arrange
        const button = wrapper.find('#seconds-increase').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3);
        expect(wrapper.state().timeRemainingg).not.toBe(1);
      });

      it('cannot let seconds increase above 59', () => {
        // Arrange
        const button = wrapper.find('#seconds-increase').first();
        wrapper.setState({ timeRemaining: 59 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(59);
        expect(wrapper.state().timeRemaining).not.toBe(60);
      });
    });

    describe('clicking the - seconds button', () => {
      it('decreases the seconds in the time remaining', () => {
        // Arrange
        const button = wrapper.find('#seconds-decrease').first();
        wrapper.setState({ timeRemaining: 32 });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(30);
        expect(wrapper.state().timeRemaining).not.toBe(31);
      });

      it('cannot let seconds decrease below 0', () => {
        // Arrange
        const button = wrapper.find('#seconds-decrease').first();
        wrapper.setState({ timeRemaining: 1 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1);
      });

      it('returns when decreasing below min time', () => {
        // Arrange
        const button = wrapper.find('#seconds-decrease').first();
        wrapper.setState({ timeRemaining: 0 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1);
      });
    });
  });

  describe('when the Start button is clicked', () => {
    let startButton;

    beforeEach(() => {
      startButton = wrapper.find('#timer-start').first();
    });

    it('starts the timer', () => {
      // Arrange
      wrapper.setState({ timeRemaining: 62 });

      // Act
      startButton.simulate('click');

      // Assert
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(clearInterval).toHaveBeenCalledTimes(1);
      expect(wrapper.state().startClicked).toBe(true);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });

    it('it cannot be click again', () => {
      // Arrange
      wrapper.setState({ startClicked: true });

      // Act
      startButton.simulate('click');

      // Assert
      expect(setInterval).toHaveBeenCalledTimes(0);
      expect(clearInterval).toHaveBeenCalledTimes(0);
      expect(wrapper.state().startClicked).toBe(true);
    });
  });

  describe('when the Pause button is clicked', () => {
    it('pauses the tick function from changing the timeRemaining state ', () => {
      // Arrange
      wrapper.setState({ startClicked: true });
      wrapper.setState({ timeRemaining: 56 });

      // Act
      const pauseButton = wrapper.find('#timer-pause').first();
      pauseButton.simulate('click');

      // Assert
      expect(clearInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenCalledTimes(0);
      expect(wrapper.state().timeRemaining).toBe(56);
      expect(wrapper.state().startClicked).toBe(false);
    });
  });

  describe('when the Clear button is clicked', () => {
    it('clears the the Hours, Minutes, Seconds state', () => {
      // Arrange
      const clearButton = wrapper.find('#timer-clear').first();
      wrapper.setState({ timeRemaining: 19 * hours });

      // Act
      clearButton.simulate('click');

      // Assert
      expect(wrapper.state().timeRemaining).toEqual(0);
      expect(wrapper.state().timeRemaining).not.toBe(23 * hours);
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
});
