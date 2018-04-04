import React from 'react';
import Enzyme from 'enzyme';
import Alert from '../Alert';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Alert', () => {
  it('renders when show is true', () => {
    // Arrange
    let wrapper = mount(<Alert onDismiss={jest.fn()} show />);

    it('renders correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('shows alert when start is clicked and time is zero', () => {
      expect(wrapper.find('Alert').props().show).toBe(true);
    });

    it('does not show alert when start is not clicked and time is zero', () => {
      wrapper = shallow(<Alert onDismiss={jest.fn()} show={false} />);
      expect(wrapper.find('Alert').props().show).toBe(false);
    });
  });
});
