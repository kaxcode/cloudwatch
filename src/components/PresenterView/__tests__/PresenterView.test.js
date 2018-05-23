import React from 'react';
import Enzyme from 'enzyme';
import PresenterView from '../PresenterView';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

describe('PresenterView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter keyLength={0}>
        <PresenterView />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
