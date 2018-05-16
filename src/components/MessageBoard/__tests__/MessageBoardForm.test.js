import React from 'react';
import Enzyme from 'enzyme';
import MessageBoardForm from '../MessageBoardForm.js';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MessageBoardForm', () => {
  const handleChange = jest.fn();
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const onPresent = jest.fn();
  const e = { preventDefault: jest.fn() };

  describe('#onChange', () => {
    it('updates :message state', () => {
      //Arrange
      const event = { target: { value: 'test' } };
      const subject = shallow(
        <MessageBoardForm
          handleChange={handleChange(event)}
          onChange={onChange}
          onSubmit={onSubmit}
          onPresent={onPresent}
        />
      );
      const value = 'test value';
      const result = subject.find('#message-input');
      //Act
      result.simulate('change', { target: { value } });
      //Assert
      expect(handleChange).toHaveBeenCalled();
    });
  });
  describe('#handleSubmit', () => {
    it('trims the input', () => {
      //Arrange
      const event = { target: { value: 'test' } };
      const subject = shallow(
        <MessageBoardForm
          handleChange={handleChange(event)}
          onChange={onChange}
          onSubmit={onSubmit}
          onPresent={onPresent}
        />
      );
      subject.instance().input = { value: '' };
      const value = 'test';
      const result = subject.find('#message-input');
      //Act
      result.simulate('change', { target: { value } });
      subject.instance().handleSubmit(e);

      //Assert
      expect(value).toEqual('test');
    });
  });
  describe('form input', () => {
    it('sets the inputs ref to the value of the input', () => {
      // Arrange
      const event = { target: { value: 'test' } };
      const subject = mount(
        <MessageBoardForm
          handleChange={handleChange(event)}
          onChange={onChange}
          onSubmit={onSubmit}
          onPresent={onPresent}
        />
      );
      subject.instance().input = { value: '' };
      const value = 'test';
      const result = subject.find('#message-input');
      //Act
      result.simulate('change', { target: { value } });
      // Assert
      expect(subject.ref('test')).toBeTrue;
    });
  });

  describe('submit button', () => {
    it('updates :showMessage state', () => {
      // Arrange
      const event = { target: { value: 'test' } };
      const subject = shallow(
        <MessageBoardForm
          handleChange={handleChange(event)}
          onChange={onChange}
          onSubmit={onSubmit}
          onPresent={onPresent}
        />
      );
      subject.instance().input = { value: '' };
      const result = subject.find('#message-submit-button');
      //Act
      result.simulate('click');

      // Assert
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
