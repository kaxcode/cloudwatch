import React from 'react';
import Enzyme from 'enzyme';
import PresenterView from '../PresenterView';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('PresenterView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PresenterView />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
