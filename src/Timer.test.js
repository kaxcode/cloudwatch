import React from 'react';
import Timer from './Timer';
import renderer from 'react-test-renderer';

it('renders correctly', () => {

  jest.useFakeTimers();

  const tree = renderer.create(<Timer />).toJSON();
  expect(tree).toMatchSnapshot();
});
