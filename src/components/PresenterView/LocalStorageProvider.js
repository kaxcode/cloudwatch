import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import WindowEvent from './WindowEvent.js';

class LocalStorageProvider extends React.Component {
  static propTypes = {
    keys: arrayOf(string),
    children: func
  };
  state = {
    someState: {
      timeRemaining: 0
    }
  };

  componentDidMount = () => {
    this.setState({ timeRemaining: localStorage.timeRemaining });
  };
  handleStorage = e => {
    const someState = this.props.keys.reduce((set, key) => {
      set[key] = localStorage.getItem(key);
      console.log(set);
      return set;
    }, {});
    this.setState({ someState });
    console.log(e);
    console.log(someState);
  };
  render() {
    return (
      <React.Fragment>
        <WindowEvent event="storage" handler={this.handleStorage} />
        {this.props.children(this.state.someState)}
      </React.Fragment>
    );
  }
}

export default LocalStorageProvider;
