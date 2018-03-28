import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import StopwatchContainer from '../StopwatchContainer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('StopwatchContainer', () => {
  let wrapper;

  function handleStartMock() {}

  beforeEach(() => {
    wrapper = shallow(<StopwatchContainer handleStart={handleStartMock} />);
  });

  jest.useFakeTimers();

  it('runs after start click', () => {
    //Arrange
    const spy = jest.spyOn(wrapper.instance(), 'handleStart');

    //Act
    wrapper.instance().handleStart();

    //Assert
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
    expect(spy).toHaveBeenCalled();
  });

  it('does not run if start has been clicked', () => {
    //Arrange
    const spy = jest.spyOn(wrapper.instance(), 'handleStart');

    //Act
    wrapper.setState({ clicked: true });
    wrapper.instance().handleStart();

    //Assert
    expect(wrapper.state().clicked).toBe(true);
    expect(wrapper.state().counter).not.toBe(1);
    expect(spy).toHaveBeenCalled();
  });

  it('pauses the tick function from chaning the timeRemaining state ', () => {
    // Arrange
    const spy = jest.spyOn(wrapper.instance(), 'handlePause');
    wrapper.instance().handleStart();

    // Act
    wrapper.instance().handlePause();

    // Assert
    expect(setInterval).toHaveBeenCalledTimes(2);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
    expect(spy).toHaveBeenCalled();
  });

  it('clears the the Hours, Minutes, Seconds state', () => {
    // Arrange
    const spy = jest.spyOn(wrapper.instance(), 'handleClear');
    wrapper.instance().handleStart();

    // Act
    wrapper.instance().handleClear();

    // Assert
    expect(wrapper.state().counter).toEqual(0);
    expect(wrapper.state().counter).not.toBe(1);
    expect(spy).toHaveBeenCalled();
  });

  describe('#tick', () => {
    it('decreases the time remaining by 1 second', () => {
      // Arrange
      wrapper.setState({ counter: 0 });

      // Act
      wrapper.instance().tick();

      // Assert
      expect(wrapper.state().counter).toEqual(1);
      expect(wrapper.state().counter).not.toBe(0);
      expect(wrapper.state().counter).not.toBe(-1);
    });

    it('stops ticking if counter is 0', () => {
      // Arrange
      wrapper.setState({ counter: 0 });

      // Act
      wrapper.instance().tick();

      // Assert
      expect(wrapper.state().counter).toEqual(1);
      expect(wrapper.state().counter).not.toBe(-1);
      expect(wrapper.state().counter).not.toBe(0);
    });
  });
});
