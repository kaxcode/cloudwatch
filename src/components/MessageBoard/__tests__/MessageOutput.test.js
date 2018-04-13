import React from 'react';
import Enzyme from 'enzyme';
import MessageOutput from '../MessageOutput.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const handleDismiss = jest.fn();

describe('MessageOutput', () => {
  it('does not render a message when :showMessage is false', () => {
    const subject = shallow(
      <MessageOutput
        showMessage={false}
        handleDismiss={handleDismiss}
        message="string"
      />
    );
    expect(toJson(subject)).toMatchSnapshot();
  });
  it('renders a message when :showMessage is true', () => {
    const subject = shallow(
      <MessageOutput
        showMessage
        handleDismiss={handleDismiss}
        message="string"
      />
    );
    expect(toJson(subject)).toMatchSnapshot();
  });
});
