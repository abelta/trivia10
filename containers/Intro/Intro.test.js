import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-native';
import Intro from '.';

describe('Intro', () => {
  const tree = renderer.create(
    <Router>
      <Intro />
    </Router>,
  );

  it('renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
