import React from 'react';
import Enzyme from 'enzyme';
import MessageBoardForm from '../MessageBoardForm.js';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MessageBoardForm', () => {
  const handleChange = jest.fn();
  const onChange = jest.fn();
  const onSubmit = jest.fn();
  const onPresent = jest.fn();

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

  describe('submit button', () => {
    it('updates :showMessage state', () => {
      // Arrange
      const subject = shallow(
        <MessageBoardForm
          onChange={onChange}
          onSubmit={onSubmit}
          onPresent={onPresent}
          location={{ pathname: '/timer' }}
        />
      );
      // Act
      const frm = subject.find('#message-submit-form');
      frm.simulate('submit', { onSubmit });
      // Assert
      expect(onSubmit).toHaveBeenCalled();
    });
  });
  it('does not render a message when #window.name is presenter', () => {
    global.window.name = 'presenter';
    const subject = shallow(
      <MessageBoardForm
        onChange={onChange}
        onSubmit={onSubmit}
        onPresent={onPresent}
      />
    );
    expect(subject.type()).toEqual(null);
  });
});
