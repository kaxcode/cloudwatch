import React from 'react';
import Timer from './Timer';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer.create(<Timer />).toJSON();
  expect(tree).toMatchSnapshot();
});

jest.useFakeTimers();

test('Timer runs after click', () => {
  const timer = shallow(<Timer />);
  timer.instance().startTimer();

  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
