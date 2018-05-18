import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import 'jest-localstorage-mock';
import TimeDisplay from './TimeDisplay';

Enzyme.configure({ adapter: new Adapter() });

describe('TimeDisplay', () => {
  it('renders correctly', () => {
    expect(toJson(shallow(<TimeDisplay time={'20000'} />))).toMatchSnapshot();
  });
});
