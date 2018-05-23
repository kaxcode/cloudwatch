import React from 'react';
import Enzyme from 'enzyme';
import MessageOutput from '../MessageOutput.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

Enzyme.configure({ adapter: new Adapter() });
const handleDismiss = jest.fn();
const onChange = jest.fn();

describe('MessageOutput', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('does not render a message when :showMessage is false', () => {
    const subject = shallow(
      <MessageOutput
        showMessage={false}
        onDismiss={handleDismiss}
        message="string"
        onChange={onChange}
      />
    );
    expect(toJson(subject)).toMatchSnapshot();
  });
  it('renders a message when :showMessage is true', () => {
    const subject = shallow(
      <MessageOutput showMessage onDismiss={handleDismiss} message="string" />
    );
    expect(toJson(subject)).toMatchSnapshot();
  });
  it('does not render if localStorage.message is an empty string', () => {
    localStorage.setItem('message', '');
    const subject = shallow(
      <MessageOutput showMessage={false} onDismiss={handleDismiss} message="" />
    );
    expect(toJson(subject)).toMatchSnapshot();
  });
  it('renders if localStorage.message is NOT an empty string', () => {
    const subject = shallow(
      <MessageOutput showMessage onDismiss={handleDismiss} message="testing" />
    );
    localStorage.setItem('message', 'testing');
    subject.update();
    expect(subject.type()).toEqual('div');
  });
});
