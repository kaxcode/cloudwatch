import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Stopwatch from './Stopwatch';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Stopwatch', () => {
  let stopwatch;

  beforeEach(() => {
    stopwatch = shallow(<Stopwatch />);
  });

  it('renders correctly', () => {
    expect(toJson(stopwatch)).toMatchSnapshot();
  });

  jest.useFakeTimers();

  test('runs after click', () => {
    stopwatch.instance().startStopwatch();

    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
  });
});
