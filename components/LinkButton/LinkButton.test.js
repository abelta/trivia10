import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-native';
import { Text } from 'react-native';
import LinkButton from '.';

describe('LinkButton', () => {
  const tree = renderer.create(
    <Router>
      <LinkButton to="/">
        <Text>text</Text>
      </LinkButton>
    </Router>,
  ).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
