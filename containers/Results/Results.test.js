import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Results from '.';

const state = {
  game: {
    score: 9,
  },
};

const store = configureStore()(state);

describe('Results', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Results />
      </Router>
    </Provider>,
  ).toJSON();

  it('renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
