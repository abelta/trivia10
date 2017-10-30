import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Initialize from '.';

describe('Initialize', () => {
  describe('when questions have not been loaded', () => {
    const state = {
      game: {
        round: 0,
      },
      questions: [],
    };
    const store = configureStore()(state);
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Initialize />
        </Router>
      </Provider>,
    ).toJSON();

    it('renders properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when questions have been loaded', () => {
    const state = {
      game: {
        round: 0,
      },
      questions: [
        {
          category: 'History',
          difficulty: 'Hard',
          text: 'Japan was part of the Allied Powers during World War I.',
          correctAnswer: 'true',
        },
      ],
    };
    const store = configureStore()(state);
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Initialize />
        </Router>
      </Provider>,
    ).toJSON();

    it('renders properly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
