import React from 'react';
import Enzyme from 'enzyme';
import Stopwatch from '../Stopwatch';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('Stopwatch', () => {
  let wrapper;

  const onMock = jest.fn();

  const props = {
    onStart: onMock,
    onPause: onMock,
    onClear: onMock,
    handleStart: onMock,
    handlePause: onMock,
    handleClear: onMock
  };

  beforeEach(() => {
    wrapper = shallow(<Stopwatch {...props} />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
