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
    wrapper = shallow(<Timer />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the `+/-` buttons are clicked', () => {
    describe('the `+` hours button is clicked', () => {
      it('should update the state hoursRemaining to increase by 1', () => {
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

    describe('the `-` hours button is clicked', () => {
      it('should update the state hoursRemaining to decrease by 1', () => {
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

    describe('the `+` minutes button is clicked', () => {
      it('should update the state minutesRemaining to increase by 1', () => {
        // Arrange
        const button = wrapper.find('.minutes .plus-btn').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().minutesRemaining).toEqual(3);
        expect(wrapper.state().minutesRemainingg).not.toBe(1);
      });

      it('should not let minutes increase above 59', () => {
        // Arrange
        const button = wrapper.find('.minutes .plus-btn').first();
        wrapper.setState({ minutesRemaining: 59 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().minutesRemaining).toEqual(59);
        expect(wrapper.state().minutesRemaining).not.toBe(60);
      });
    });

    describe('the `-` minutes button is clicked', () => {
      it('should update the state minutesRemaining to decrease by 1', () => {
        // Arrange
        const button = wrapper.find('.minutes .minus-btn').first();
        wrapper.setState({ minutesRemaining: 22 });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().minutesRemaining).toEqual(20);
        expect(wrapper.state().minutesRemaining).not.toBe(21);
      });

      it('should not let minutes decrease below 0', () => {
        // Arrange
        const button = wrapper.find('.minutes .minus-btn').first();
        wrapper.setState({ minutesRemaining: 1 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().minutesRemaining).toEqual(0);
        expect(wrapper.state().minutesRemaining).not.toBe(-1);
      });
    });

    describe('the `+` seconds button is clicked', () => {
      it('should update the state secondsRemaining to increase by 1', () => {
        // Arrange
        const button = wrapper.find('.seconds .plus-btn').first();

        // Act
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().secondsRemaining).toEqual(3);
        expect(wrapper.state().secondsRemainingg).not.toBe(1);
      });

      it('should not let seconds increase above 59', () => {
        // Arrange
        const button = wrapper.find('.seconds .plus-btn').first();
        wrapper.setState({ secondsRemaining: 59 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().secondsRemaining).toEqual(59);
        expect(wrapper.state().secondsRemaining).not.toBe(60);
      });
    });

    describe('the `-` seconds button is clicked', () => {
      it('should update the state secondsRemaining to decrease by 1', () => {
        // Arrange
        const button = wrapper.find('.seconds .minus-btn').first();
        wrapper.setState({ secondsRemaining: 32 });

        // Act
        button.simulate('click');
        button.simulate('click');

        // Assert
        expect(wrapper.state().secondsRemaining).toEqual(30);
        expect(wrapper.state().secondsRemaining).not.toBe(31);
      });

      it('should not let seconds decrease below 0', () => {
        // Arrange
        const button = wrapper.find('.seconds .minus-btn').first();
        wrapper.setState({ secondsRemaining: 1 });

        // Act
        button.simulate('click');

        // Assert
        expect(wrapper.state().secondsRemaining).toEqual(0);
        expect(wrapper.state().secondsRemaining).not.toBe(-1);
      });
    });
  });
});
