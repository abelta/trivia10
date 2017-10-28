import React from 'react';
import renderer from 'react-test-renderer';
import StatusBar from '.';

describe('StatusBar', () => {
  it('renders properly', () => {
    const tree = renderer.create(<StatusBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
