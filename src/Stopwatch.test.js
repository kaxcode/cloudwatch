import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Stopwatch from './Stopwatch';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('Stopwatch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Stopwatch />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('when the Start button is clicked', () => {
    let startButton;

    beforeEach(() => {
      startButton = wrapper.find('#stopwatch-start').first();
    });

    it('starts the stopwatch', () => {
      // Act
      startButton.simulate('click');

      // Assert
      expect(wrapper.state().clicked).toBe(true);
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(clearInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
    });

    it('it does nothing if already running', () => {
      // Arrange
      wrapper.setState({ clicked: true });

      // Act
      startButton.simulate('click');

      // Assert
      expect(wrapper.state().clicked).toBe(true);
      expect(setInterval).toHaveBeenCalledTimes(0);
      expect(clearInterval).toHaveBeenCalledTimes(0);
    });
  });

  describe('when the Pause button is clicked', () => {
    it('sets clicked state to false', () => {
      // Arrange
      wrapper.setState({ clicked: true });

      // Act
      const pauseButton = wrapper.find('#stopwatch-pause').first();
      pauseButton.simulate('click');

      // Assert
      expect(clearInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenCalledTimes(0);
      expect(wrapper.state().clicked).toBe(false);
    });
  });

  describe('when the Clear button is clicked', () => {
    it('the states are set to default', () => {
      // Arrange
      const clearButton = wrapper.find('#stopwatch-clear').first();
      wrapper.setState({ counter: 72 });

      // Act
      clearButton.simulate('click');

      // Assert
      expect(wrapper.state().counter).toEqual(0);
      expect(wrapper.state().clicked).toBe(false);
      expect(wrapper.state().counter).not.toBe(72);
    });
  });

  describe('#tick', () => {
    it('increases the counter state by 1 second', () => {
      // Arrange
      wrapper.setState({ counter: 20 });

      // Act
      wrapper.instance().tick();

      // Assert
      expect(wrapper.state().counter).toEqual(21);
      expect(wrapper.state().counter).not.toBe(20);
      expect(wrapper.state().counter).not.toBe(19);
    });
  });
});
