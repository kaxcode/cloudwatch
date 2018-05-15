import React from 'react';
import Enzyme from 'enzyme';
import WindowEvent from '../WindowEvent';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('Stopwatch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WindowEvent />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
