import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import StopwatchContainer from '../StopwatchContainer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('StopwatchContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StopwatchContainer />);
  });

  jest.useFakeTimers();

  it('runs after click', () => {
    //Arrange
    const spy = jest.spyOn(wrapper.instance(), 'handleStart');

    //Act
    wrapper.instance().handleStart();

    //Assert
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
    expect(spy).toHaveBeenCalled();
  });
});
