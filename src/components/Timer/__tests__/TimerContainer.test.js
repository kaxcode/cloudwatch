import React from 'react';
import Enzyme from 'enzyme';
import TimerContainer from '../TimerContainer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('Timer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TimerContainer />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
