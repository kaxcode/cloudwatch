import React from 'react';
import Enzyme from 'enzyme';
import Alert from './Alert';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Alert', () => {
  describe('#componentDidMount', () => {
    it('calls #handleAlert when shown', () => {
      // Arrange
      const wrapper = mount(<Alert onDismiss={jest.fn()} show />);
      const spy = jest.spyOn(wrapper.instance(), 'handleAlert');

      // Act
      wrapper.instance().componentDidMount();

      // Assert
      expect(spy).toHaveBeenCalled();
    });

    it('does not call #handleAlert when not shown', () => {
      // Arrange
      const wrapper = mount(<Alert onDismiss={jest.fn()} show={false} />);
      const spy = jest.spyOn(wrapper.instance(), 'handleAlert');

      // Act
      wrapper.instance().componentDidMount();

      // Assert
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('#componentDidUpdate', () => {
    it('does not call #handleAlert when show changes from TRUE to FALSE', () => {
      // Arrange
      const wrapper = shallow(<Alert onDismiss={jest.fn()} show />, {
        lifecycleExperimental: true
      });
      const spy = jest.spyOn(wrapper.instance(), 'handleAlert');

      // Act
      wrapper.setProps({ show: true });

      // Assert
      expect(spy).not.toHaveBeenCalled();
    });

    it('calls #handleAlert when show changes from FALSE to TRUE', () => {
      // Arrange
      const wrapper = shallow(<Alert onDismiss={jest.fn()} show={false} />, {
        lifecycleExperimental: true
      });
      const spy = jest.spyOn(wrapper.instance(), 'handleAlert');

      // Act
      wrapper.setProps({ show: true });

      // Assert
      expect(spy).toHaveBeenCalled();
    });

    it('does not call #handleAlert when show changes from TRUE to TRUE', () => {
      // Arrange
      const wrapper = shallow(<Alert onDismiss={jest.fn()} show />, {
        lifecycleExperimental: true
      });
      const spy = jest.spyOn(wrapper.instance(), 'handleAlert');

      // Act
      wrapper.setProps({ show: true });

      // Assert
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
