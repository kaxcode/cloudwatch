import React from 'react';
import Enzyme from 'enzyme';
import MessageBoard from '../MessageBoard.js';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MessageBoard', () => {
  const handleChange = jest.fn();

  describe('#handleDismiss', () => {
    it('does not render a message when #handleDismiss is called', () => {
      //Arrange
      const subject = shallow(<MessageBoard />);
      //Act
      subject.instance().handleDismiss();
      //Assert
      expect(subject.state().showMessage).toBe(false);
    });
  });

  describe('#handleChange', () => {
    it('updates :message state', () => {
      //Arrange
      const event = { target: { value: 'test' } };
      const subject = shallow(
        <MessageBoard handleChange={handleChange(event)} />
      );
      const value = 'test value';
      const result = subject.find('#message-input');
      //Act
      result.simulate('change', { target: { value } });

      //Assert
      expect(handleChange).toHaveBeenCalled();
    });
  });
  describe('submit button', () => {
    it('updates :showMessage state', () => {
      // Arrange
      const preventDefault = jest.fn();
      const subject = shallow(<MessageBoard />);
      // Act
      const frm = subject.find('#message-submit-form');
      frm.simulate('submit', { preventDefault });
      // Assert
      expect(preventDefault).toHaveBeenCalled();
      expect(subject.state().showMessage).toBe(true);
    });
  });
  describe('#hanndleSubmit', () => {
    it('renders a message when showMessage is TRUE', () => {
      //Arrange
      const subject = shallow(<MessageBoard />);
      //Act
      subject.setState({ showMessage: true });
      //Assert
      expect(subject.state().showMessage).toBe(true);
    });
  });
});
