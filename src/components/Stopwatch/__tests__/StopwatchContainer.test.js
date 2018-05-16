import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import StopwatchContainer from '../StopwatchContainer';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

Enzyme.configure({ adapter: new Adapter() });

describe('StopwatchContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StopwatchContainer />);
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
  it('pauses the tick function from chaning the counter state ', () => {
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
    it('increases the time remaining by 1 second', () => {
      // Arrange
      const lastTick = Date.now();
      wrapper.setState({ counter: 0, lastTick: lastTick });
      // Act
      setInterval(wrapper.instance().tick(), 10);

      // Assert
      expect(wrapper.state().counter).toEqual(1);
    });
    it('stops ticking if counter is 0', () => {
      Date.now = jest.fn(() => new Date(Date.UTC(2017, 7, 9, 8)).valueOf());
      // Arrange
      const lastTick = Date.now();
      wrapper.setState({ counter: 0, lastTick: lastTick });
      // Act
      setInterval(wrapper.instance().tick(), 10);
      // Assert
      expect(wrapper.state().counter).toEqual(0);
    });
  });

  describe('#componentDidMount', () => {
    it('sets an initial counter value from localstorage when available', () => {
      // Arrange
      const initialCounter = Math.round(Math.random() * 10000);
      localStorage.setItem('counter', initialCounter);
      // Act
      const subject = shallow(<StopwatchContainer />);
      // Assert
      expect(subject.state().counter).toEqual(initialCounter);
    });
    it('sets a sane default counter value', () => {
      // Arrange
      localStorage.setItem('counter', null);
      // Act
      const subject = shallow(<StopwatchContainer />);
      // Assert
      expect(subject.state().counter).toEqual(0);
    });
  });

  describe('#componentDidUpdate', () => {
    it('sets state to localStorage value ', () => {
      // Arrange
      localStorage.setItem('counter', 999);
      // Act
      wrapper.update();
      // Assert
      expect(localStorage.getItem('counter')).toEqual('999');
    });
  });

  describe('#componentWillUnmount', () => {
    it('resets the stored state in localStorage', () => {
      // Arrange
      localStorage.setItem('counter', 999);
      // Act
      wrapper.instance().componentWillUnmount();
      // Assert
      expect(localStorage.getItem('counter')).toEqual('0');
    });
  });
});
