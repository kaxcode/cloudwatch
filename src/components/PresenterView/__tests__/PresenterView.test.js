import React from 'react';
import Enzyme from 'enzyme';
import PresenterView from '../PresenterView';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('Stopwatch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PresenterView />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
