import React from 'react';
import Enzyme from 'enzyme';
import Alert from '../Alert';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function handleAlertMock() {}

describe('Alert', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Alert handleAlert={handleAlertMock} />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
