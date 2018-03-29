import React from 'react';
import Enzyme from 'enzyme';
import Stopwatch from '../Stopwatch';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('Stopwatch', () => {
  let wrapper;

  const handleStart = jest.fn();
  const handlePause = jest.fn();
  const handleClear = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Stopwatch
        onStart={handleStart}
        onPause={handlePause}
        onClear={handleClear}
      />
    );
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('the start button', () => {
    it('calls the :onClick prop when clicked', () => {
      //Arrange
      const startButton = wrapper.find('#stopwatch-start').first();
      //Act
      startButton.simulate('click');
      //Assert
      expect(handleStart).toHaveBeenCalled();
    });
  });

  describe('the pause button', () => {
    it('calls the :onClick prop when clicked', () => {
      //Arrange
      const pauseButton = wrapper.find('#stopwatch-pause').first();
      //Act
      pauseButton.simulate('click');
      //Assert
      expect(handlePause).toHaveBeenCalled();
    });
  });

  describe('the clear button', () => {
    it('calls the :onClick prop when clicked', () => {
      //Arrange
      const clearButton = wrapper.find('#stopwatch-clear').first();
      //Act
      clearButton.simulate('click');
      //Assert
      expect(handleClear).toHaveBeenCalled();
    });
  });
});
