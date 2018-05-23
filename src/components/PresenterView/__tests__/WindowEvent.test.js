import React from 'react';
import Enzyme from 'enzyme';
import WindowEvent from '../WindowEvent';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();
const handleStorage = jest.fn();

describe('WindowEvent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WindowEvent event="storage" handler={handleStorage} />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('#componentWillUpdate', () => {
    const wrapper = shallow(
      <WindowEvent event="storage" handler={handleStorage} />
    );

    it('calls removeEvent', () => {
      const spy = jest.spyOn(wrapper.instance(), 'removeEvent');
      wrapper.instance().componentWillUpdate();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#componentDidUpdate', () => {
    const wrapper = shallow(
      <WindowEvent event="storage" handler={handleStorage} />
    );

    it('calls addEvent', () => {
      const spy = jest.spyOn(wrapper.instance(), 'addEvent');
      wrapper.instance().componentDidUpdate();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#componentWillUnmount', () => {
    const wrapper = shallow(
      <WindowEvent event="storage" handler={handleStorage} />
    );

    it('calls removeEvent', () => {
      const spy = jest.spyOn(wrapper.instance(), 'removeEvent');
      wrapper.instance().componentWillUnmount();
      expect(spy).toHaveBeenCalled();
    });
  });
});
