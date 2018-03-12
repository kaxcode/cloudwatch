import React from 'react';
import Timer from './Timer';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Timer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Timer />
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the `+/-` buttons are clicked', () => {
    describe('the `+` buttons are clicked', () => {
      it('should update the state to increase by 1', () => {
        // Arrange
        const button = wrapper.find('.hours .plus-btn').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().hoursRemaining).toEqual(3);
        expect(wrapper.state().hoursRemaining).not.toBe(1);
      });

      it('should not let hours increase above 23', () => {
        // Arrange
        const button = wrapper.find('.hours .plus-btn').first();
        wrapper.setState({ hoursRemaining: 23 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().hoursRemaining).toEqual(23);
        expect(wrapper.state().hoursRemaining).not.toBe(24);
      });
    });

    describe('the `-` buttons are clicked', () => {
      it('should update the state to decrease by 1', () => {
        // Arrange
        const button = wrapper.find('.hours .minus-btn').first();
        wrapper.setState({ hoursRemaining: 22 });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().hoursRemaining).toEqual(20);
        expect(wrapper.state().hoursRemaining).not.toBe(21);
      });

      it('should not let hours increase above 23', () => {
        // Arrange
        const button = wrapper.find('.hours .minus-btn').first();
        wrapper.setState({ hoursRemaining: 1 });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().hoursRemaining).toEqual(0);
        expect(wrapper.state().hoursRemaining).not.toBe(-1);
      });
    });
  });
});
