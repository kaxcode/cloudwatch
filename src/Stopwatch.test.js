import React from 'react';
import Stopwatch from './Stopwatch';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Stopwatch', () => {
  let stopwatch;

  beforeEach(() => {
    stopwatch = shallow(<Stopwatch />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(stopwatch).toJSON();
    expect(tree).toMatchSnapshot();
  });

  jest.useFakeTimers();

  test('Stopwatch runs after click', () => {
    stopwatch.instance().startStopwatch();

    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
  });
});
