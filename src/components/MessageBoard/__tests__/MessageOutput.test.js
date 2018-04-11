import React from 'react';
import Enzyme from 'enzyme';
import MessageOutput from '../MessageOutput.js';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('MessageOutput', () => {
  it('does not render a message when :showMessage is false', () => {
    const subject = shallow(<MessageOutput showMessage={false} />);
    expect(toJson(subject)).toMatchSnapshot();
  });
  it('renders a message when :showMessage is true', () => {
    const subject = shallow(<MessageOutput showMessage />);
    expect(toJson(subject)).toMatchSnapshot();
  });
});
