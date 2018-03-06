import React from 'react';
import Stopwatch from './Stopwatch';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<Stopwatch />).toJSON();
  expect(tree).toMatchSnapshot();
});

jest.useFakeTimers();

test('Stopwatch runs after click', () => {
  const stopwatch = shallow(<Stopwatch />);
  stopwatch.instance().startStopwatch();

  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
});
