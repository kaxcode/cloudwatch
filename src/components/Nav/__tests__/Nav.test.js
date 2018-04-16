import React from 'react';
import Enzyme from 'enzyme';
import Nav from '../Nav';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Stopwatch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
