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

  function onStartMock() {}

  beforeEach(() => {
    wrapper = shallow(
      <Timer startClicked timeRemaining={0} onStart={onStartMock} />
    );
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shows alert when start is clicked and time is zero', () => {
    //Arrange

    //Assert

    expect(wrapper.find('Alert').props().show).toBe(true);
  });
});
