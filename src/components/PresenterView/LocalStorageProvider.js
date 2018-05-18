import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import WindowEvent from './WindowEvent.js';

class LocalStorageProvider extends React.Component {
  static defaultProps = {
    children: () => {}
  }

  static propTypes = {
    keys: arrayOf(string),
    children: func.isRequired
  }

  state = {}

  componentWillMount = () => {
    this.deriveStateFromStore();
  }

  deriveStateFromStore = () => {
    const newState = this.props.keys.reduce((set, key) => {
      set[key] = localStorage.getItem(key);
      return set;
    }, {});
    this.setState(newState);
  }

  handleStorage = () => {
    this.deriveStateFromStore();
  }

  render() {
    return (
      <React.Fragment>
        <WindowEvent event="storage" handler={this.handleStorage} />
        {this.props.children(this.state)}
      </React.Fragment>
    );
  }
}

export default LocalStorageProvider;
