import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import AdjustTimerButtonGroup from '../AdjustTimerButtonGroup';

Enzyme.configure({ adapter: new Adapter() });

describe('Adjudst Timer Button Group', () => {
  let wrapper;

  const increaseHoursMock = jest.fn();
  const decreaseHoursMock = jest.fn();
  const increaseMinutesMock = jest.fn();
  const decreaseMinutesMock = jest.fn();
  const increaseSecondsMock = jest.fn();
  const decreaseSecondsMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <AdjustTimerButtonGroup
        increaseHours={increaseHoursMock}
        decreaseHours={decreaseHoursMock}
        increaseMinutes={increaseMinutesMock}
        decreaseMinutes={decreaseMinutesMock}
        increaseSeconds={increaseSecondsMock}
        decreaseSeconds={decreaseSecondsMock}
      />
    );
  });
  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('does not render if in presenter window', () => {
    global.window.name = 'presenter';
    wrapper = shallow(
      <AdjustTimerButtonGroup
        increaseHours={increaseHoursMock}
        decreaseHours={decreaseHoursMock}
        increaseMinutes={increaseMinutesMock}
        decreaseMinutes={decreaseMinutesMock}
        increaseSeconds={increaseSecondsMock}
        decreaseSeconds={decreaseSecondsMock}
      />
    );
    wrapper.update();
    expect(wrapper.type()).toEqual(null);
  });
});
