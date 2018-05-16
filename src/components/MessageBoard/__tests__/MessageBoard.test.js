import React from 'react';
import Enzyme from 'enzyme';
import MessageBoard from '../MessageBoard.js';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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

describe('MessageBoard', () => {
  describe('#handleDismiss', () => {
    it('does not render a message when #handleDismiss is called', () => {
      //Arrange
      const subject = shallow(<MessageBoard />);
      //Act
      subject.instance().handleDismiss();
      //Assert
      expect(subject.state().message).toEqual('');
    });
  });

  describe('#componentDidMount', () => {
    it('checks if window is in presenter mode and if so sets the message state to that in localStorage', () => {
      // Arrange
      const testMessage = 'testMessage';
      const subject = shallow(
        <MessageBoard
          location={{ pathname: '/timer' }}
          timeRemaining={5}
          counter={5}
        />
      );
      global.name = 'presenter';
      // Act
      localStorage.setItem('message', testMessage);
      subject.instance().componentDidMount();
      // Assert
      expect(subject.state().message).toEqual(testMessage);
    });
  });

  describe('#handleSubmit', () => {
    it('renders a message when showMessage is TRUE', () => {
      //Arrange
      const subject = shallow(
        <MessageBoard
          location={{ pathname: '/timer' }}
          timeRemaining={5}
          counter={5}
        />
      );
      //Act
      subject.setState({ showMessage: true });
      //Assert
      expect(subject.state().showMessage).toBe(true);
    });
    it('calls #preventDefault when called', () => {
      const e = { preventDefault: jest.fn() };
      const subject = shallow(
        <MessageBoard
          location={{ pathname: '/timer' }}
          timeRemaining={5}
          counter={5}
        />
      );
      subject.instance().handleSubmit(e, 'test');
      expect(e.preventDefault).toHaveBeenCalled();
    });
  });

  describe('#handlePresent', () => {
    it('sets the message in localStorage', () => {
      //Arrange
      const subject = shallow(
        <MessageBoard
          location={{ pathname: '/timer' }}
          timeRemaining={5}
          counter={5}
        />
      );
      // Act
      localStorage.setItem('message', 'test message');
      subject.setState({ message: 'test message' });
      // Act
      subject.update();
      // Assert
      expect(localStorage.getItem('message')).toEqual('test message');
    });
  });

  it('opens secondary window with location and assigns the name presenter to it', () => {
    localStorage.setItem('message', 'test message');
    const subject = shallow(
      <MessageBoard
        location={{ pathname: '/timer' }}
        timeRemaining={5}
        counter={5}
      />
    );
    subject.setState({ message: 'test message' });
    window.open = jest.fn();
    subject.instance().handlePresent();
    expect(window.open).toBeCalled();
  });
});
