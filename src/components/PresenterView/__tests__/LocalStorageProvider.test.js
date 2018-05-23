import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import LocalStorageProvider from '../LocalStorageProvider';
import 'jest-localstorage-mock';

Enzyme.configure({ adapter: new Adapter() });

describe('LocalStorageProvider', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('renders correctly', () => {
    localStorage.setItem('foo', 456);
    const subject = shallow(
      <LocalStorageProvider keys={['foo']}>
        {({foo}) => <div>{foo}</div>}
      </LocalStorageProvider>
    );
    expect(toJson(subject)).toMatchSnapshot();
  });

  describe('#componentWillMount', () => {
    it('calls #deriveStateFromStore', () => {
      const component = shallow(<LocalStorageProvider keys={['foo']}/>);
      const subject = component.instance();
      const spy = jest.spyOn(subject, 'deriveStateFromStore');
      localStorage.setItem('foo', 123);
      subject.componentWillMount();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('#deriveStateFromStore', () => {
    it('derives local state from localstorage', () => {
      const subject = shallow(<LocalStorageProvider keys={['foo']}/>);
      expect(subject.state()).toEqual({ foo: null });
      localStorage.setItem('foo', 123);
      subject.instance().deriveStateFromStore();
      expect(subject.state()).toEqual({ foo: '123' });
    });
  });

  describe('#handleStorage', () => {
    it('calls #deriveStateFromStore', () => {
      const component = shallow(<LocalStorageProvider keys={['foo']}/>);
      const subject = component.instance();
      const spy = jest.spyOn(subject, 'deriveStateFromStore');
      localStorage.setItem('foo', 123);
      subject.handleStorage();
      expect(spy).toHaveBeenCalled();
    });
  });
});
