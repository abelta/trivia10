import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Question from '.';

const state = {
  game: {
    score: 0,
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

describe('Question', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Question />
      </Router>
    </Provider>,
  ).toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
