import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ControllerButtons from '../ControllerButtons';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('ControllerButtons', () => {
  let wrapper;
  const onMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <ControllerButtons onPause={onMock} onStart={onMock} onClear={onMock} />
    );
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('the start button', () => {
    it('calls the :onStart prop when clicked', () => {
      //Arrange
      const startButton = wrapper.find('#timer-start').first();
      //Act
      startButton.simulate('click');
      //Assert
      expect(onMock).toHaveBeenCalled();
    });
  });

  describe('the pause button', () => {
    it('calls the :onPause prop when clicked', () => {
      //Arrange
      const pauseButton = wrapper.find('#timer-pause').first();
      //Act
      pauseButton.simulate('click');
      //Assert
      expect(onMock).toHaveBeenCalled();
    });
  });

  describe('the clear button', () => {
    it('calls the :onClear prop when clicked', () => {
      //Arrange
      const clearButton = wrapper.find('#timer-clear').first();
      //Act
      clearButton.simulate('click');
      //Assert
      expect(onMock).toHaveBeenCalled();
    });
  });
});
