import React from 'react';
import Enzyme from 'enzyme';
import MessageBoard from '../MessageBoard.js';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MessageBoard', () => {
  const handleDismiss = jest.fn();
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  describe('#handleDismiss', () => {
    it('does not render a message when #handleDismiss is called', () => {
      //Arrange
      const subject = shallow(
        <MessageBoard showMessage handleDismiss={handleDismiss} />
      );
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
    it('renders a message when you click submit', () => {
      const event = { preventDefault: () => console.log('preventDefault') };
      const subject = shallow(
        <MessageBoard
          showMessage={false}
          handleSubmit={() => handleSubmit(event)}
        />
      );
      const spy = jest.spyOn(subject.instance(), 'handleSubmit');
      //Act
      subject.instance().handleSubmit(event);
      //Assert
      expect(subject.state().showMessage).toBe(true);
      expect(spy).toHaveBeenCalled();
    });
  });
  describe('#hanndleSubmit', () => {
    it('renders a message when showMessage is TRUE', () => {
      //Arrange
      const subject = shallow(<MessageBoard showMessage={false} />);
      //Act
      subject.setState({ showMessage: true });
      //Assert
      expect(subject.state().showMessage).toBe(true);
    });
  });
});
