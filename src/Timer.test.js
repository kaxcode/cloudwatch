import React from 'react';
import Timer from './Timer';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Timer', () => {
  let wrapper;
  const hours = 3600;
  const minutes = 60;

  beforeEach(() => {
    wrapper = shallow(<Timer />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the `+/-` buttons are clicked', () => {
    describe('the `+` hours button is clicked', () => {
      it('should update the state timeRemaining to increase by 1', () => {
        // Arrange
        const button = wrapper.find('.hours .plus-btn').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3*hours);
        expect(wrapper.state().timeRemaining).not.toBe(1*hours);
      });

      it('should not let hours increase above 23', () => {
        // Arrange
        const button = wrapper.find('.hours .plus-btn').first();
        wrapper.setState({ timeRemaining: (23*hours)});

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(23*hours);
        expect(wrapper.state().timeRemaining).not.toBe(24*hours);
      });
    });

    describe('the `-` hours button is clicked', () => {
      it('should update the state timeRemaining to decrease by 1', () => {
        // Arrange
        const button = wrapper.find('.hours .minus-btn').first();
        wrapper.setState({ timeRemaining: 22*hours });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(20*hours);
        expect(wrapper.state().timeRemaining).not.toBe(21*hours);
      });

      it('should not let hours decrease below 0', () => {
        // Arrange
        const button = wrapper.find('.hours .minus-btn').first();
        wrapper.setState({ timeRemaining: 1*hours });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1*hours);
      });
    });

    describe('the `+` minutes button is clicked', () => {
      it('should update the state timeRemaining to increase by 1', () => {
        // Arrange
        const button = wrapper.find('.minutes .plus-btn').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3*minutes);
        expect(wrapper.state().timeRemainingg).not.toBe(1*minutes);
      });

      it('should not let minutes increase above 59', () => {
        // Arrange
        const button = wrapper.find('.minutes .plus-btn').first();
        wrapper.setState({ timeRemaining: 59*minutes });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(59*minutes);
        expect(wrapper.state().timeRemaining).not.toBe(60*minutes);
      });
    });

    describe('the `-` minutes button is clicked', () => {
      it('should update the state timeRemaining to decrease by 1', () => {
        // Arrange
        const button = wrapper.find('.minutes .minus-btn').first();
        wrapper.setState({ timeRemaining: 22*minutes });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(20*minutes);
        expect(wrapper.state().timeRemaining).not.toBe(21*minutes);
      });

      it('should not let minutes decrease below 0', () => {
        // Arrange
        const button = wrapper.find('.minutes .minus-btn').first();
        wrapper.setState({ timeRemaining: 1*minutes });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1*minutes);
      });
    });

    describe('the `+` seconds button is clicked', () => {
      it('should update the state timeRemaining to increase by 1', () => {
        // Arrange
        const button = wrapper.find('.seconds .plus-btn').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(3);
        expect(wrapper.state().timeRemainingg).not.toBe(1);
      });

      it('should not let seconds increase above 59', () => {
        // Arrange
        const button = wrapper.find('.seconds .plus-btn').first();
        wrapper.setState({ timeRemaining: 59 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(59);
        expect(wrapper.state().timeRemaining).not.toBe(60);
      });
    });

    describe('the `-` seconds button is clicked', () => {
      it('should update the state timeRemaining to decrease by 1', () => {
        // Arrange
        const button = wrapper.find('.seconds .minus-btn').first();
        wrapper.setState({ timeRemaining: 32 });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(30);
        expect(wrapper.state().timeRemaining).not.toBe(31);
      });

      it('should not let seconds decrease below 0', () => {
        // Arrange
        const button = wrapper.find('.seconds .minus-btn').first();
        wrapper.setState({ timeRemaining: 1 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().timeRemaining).toEqual(0);
        expect(wrapper.state().timeRemaining).not.toBe(-1);
      });
    });
  });

  jest.useFakeTimers();

  describe('when the `Start` button is clicked', () => {
    it.skip('should start the timer', () => {
      // Arrange
      wrapper.setState({ timeRemaining: 62 });
      const startButton= wrapper.find('.start-btn').first();

      // Act
      startButton.simulate('click');

      // Assert
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      expect(wrapper.state().timeRemaining).toEqual(61);
      expect(wrapper.state().timeRemaining).not.toBe(0);
    });
  });

  describe('when the `Pause` button is clicked', () => {
    it.skip('should pause the ', () => {
      // Arrange
      wrapper.setState({ timeRemaining: 23 });
      const startButton= wrapper.find('.start-btn').first();
      startButton.simulate('click');

      const pauseButton= wrapper.find('.pause-btn').first();

      // Act
      pauseButton.simulate('click');

      // Assert
      expect(wrapper.state().timeRemaining).toEqual(21);
      expect(wrapper.state().timeRemaining).not.toBe(23);
    });
  });

  describe('when the `Clear` button is clicked', () => {
    it('should clear the the Hours, Minutes, Seconds state', () => {
      // Arrange
      const clearButton = wrapper.find('.clear-btn').first();
      wrapper.setState({ timeRemaining: 19*hours });

      // Act
      clearButton.simulate('click');

      // Assert
      expect(wrapper.state().timeRemaining).toEqual(0);
      expect(wrapper.state().timeRemaining).not.toBe(23*hours);
    });
  });
});
