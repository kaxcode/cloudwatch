import React from 'react';
import Enzyme from 'enzyme';
import MessageOutput from '../MessageOutput.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const handleDismiss = jest.fn();
const onChange = jest.fn();

class LocalStorageMock {
  constructor() {
    this.message = {};
  }

  clear() {
    this.message = {};
  }

  getItem(key) {
    return this[key] || null;
  }

  setItem(key, value) {
    this[key] = value.toString();
  }

  removeItem(key) {
    delete this[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('MessageOutput', () => {
  it('does not render a message when :showMessage is false', () => {
    const subject = shallow(
      <MessageOutput
        showMessage={false}
        handleDismiss={handleDismiss}
        message="string"
        onChange={onChange}
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
  it('does not render if localStorage.message is an empty string', () => {
    localStorage.setItem('message', '');
    const subject = shallow(
      <MessageOutput
        showMessage={false}
        handleDismiss={handleDismiss}
        message=""
      />
    );
    expect(toJson(subject)).toMatchSnapshot();
  });
  it('renders if localStorage.message is NOT an empty string', () => {
    const subject = shallow(
      <MessageOutput
        showMessage
        handleDismiss={handleDismiss}
        message="testing"
      />
    );
    localStorage.setItem('message', 'testing');
    subject.update();
    expect(subject.type()).toEqual(null);
  });
});
