import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StopwatchContainer from '../StopwatchContainer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('StopwatchContainer', () => {
  let stopwatch;
  function handleStartMock() {}

  beforeEach(() => {
    stopwatch = shallow(<StopwatchContainer handleStart={handleStartMock} />);
  });

  it('renders correctly', () => {
    expect(toJson(stopwatch)).toMatchSnapshot();
  });

  jest.useFakeTimers();

  test('runs after click', () => {
    //Arrange
    const spy = jest.spyOn(stopwatch.instance(), 'handleStart');

    //Act
    stopwatch.instance().handleStart();

    //Assert
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
    expect(spy).toHaveBeenCalled();
  });
});
