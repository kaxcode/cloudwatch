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
    const event = { target: { value: 'test' } };
    const subject = shallow(<MessageBoard onChange={onChange(event)} />);
    const value = 'test value';
    const result = subject.find('#message-input');
    //Act
    result.simulate('change', { target: { value } });
    subject.instance().onChange(event);

    //Assert
    expect(onChange).toHaveBeenCalled();
  });

  it('renders a message when you click submit', () => {
    //Arrange
    const event = { preventDefault: () => console.log('preventDefault') };
    const subject = shallow(
      <MessageBoard showMessage={false} onSubmit={() => onSubmit(event)} />
    );
    const spy = jest.spyOn(subject.instance(), 'onSubmit');
    //Act
    subject.instance().onSubmit(event);
    //Assert
    expect(subject.state().showMessage).toBe(true);
    expect(spy).toHaveBeenCalled();
  });
  it('renders a message when showMessage is true', () => {
    //Arrange
    const subject = shallow(<MessageBoard showMessage={false} />);
    //Act
    subject.setState({ showMessage: true });
    //Assert
    expect(subject.state().showMessage).toBe(true);
  });
});
