import React from 'react';
import Enzyme from 'enzyme';
import Alert from '../Alert';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const onDismissMock = jest.fn();

describe('Alert', () => {
  it('renders an Alert when :show is true', () => {
    const subject = shallow(<Alert onDismiss={jest.fn()} show />);
    expect(toJson(subject)).toMatchSnapshot();
  });
  it('does not render an Alert when :show is false', () => {
    const subject = shallow(<Alert onDismiss={onDismissMock} show={false} />);
    expect(toJson(subject)).toMatchSnapshot();
  });
  it('calls :onDismiss when the dismiss button is clicked', () => {
    //Arrange
    const wrapper = shallow(<Alert onDismiss={onDismissMock} show />);
    const alertButton = wrapper.first();
    //Act`
    alertButton.simulate('click');
    //Assert
    expect(onDismissMock).toHaveBeenCalled();
  });
});
