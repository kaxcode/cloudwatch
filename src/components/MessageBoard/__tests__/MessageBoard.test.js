import React from 'react';
import Enzyme from 'enzyme';
import MessageBoard from '../MessageBoard.js';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MessageBoard', () => {
  const handleDismiss = jest.fn();
  const onSubmit = jest.fn();
  const onChange = jest.fn();

  it('does not render a message when handleDismiss is called', () => {
    const subject = shallow(
      <MessageBoard showMessage handleDismiss={handleDismiss} />
    );
    //Arrange
    const spy = jest.spyOn(subject.instance(), 'handleDismiss');
    //Act
    subject.instance().handleDismiss();
    //Assert
    expect(subject.state().showMessage).toBe(false);
    expect(spy).toHaveBeenCalled();
  });
  it('calls onChange upon changing the input value', () => {
    //Arrange
    const subject = shallow(<MessageBoard onChange={onChange} value="test" />);
    const value = 'test value';
    const result = subject.find('#message-input');
    //Act
    result.simulate('change', { target: { value } });
    //Assert
    expect(onChange).toHaveBeenCalled();
  });

  it('renders a message when you click submit', () => {
    const subject = shallow(
      <MessageBoard showMessage={false} onSubmit={onSubmit} />
    );
    //Arrange
    const spy = jest.spyOn(subject.instance(), 'onSubmit');
    const event = { preventDefault: () => console.log('preventDefault') };
    //Act
    subject.instance().onSubmit(event);
    //Assert
    expect(subject.state().showMessage).toBe(true);
    expect(spy).toHaveBeenCalled();
  });
  it('renders a message when you showMessage is true', () => {
    const subject = shallow(
      <MessageBoard showMessage={false} onSubmit={onSubmit} />
    );
    //Arrange
    const spy = jest.spyOn(subject.instance(), 'onSubmit');
    //Act
    subject.instance().onSubmit();

    //Assert
    expect(subject.state().showMessage).toBe(true);
    expect(spy).toHaveBeenCalled();
  });
});
