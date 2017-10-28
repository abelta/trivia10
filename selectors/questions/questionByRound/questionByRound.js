import { createSelector } from 'reselect';

const questionsSelector = state => state.questions;
const roundSelector = state => state.game.round;

const questionByRoundSelector = createSelector(
  questionsSelector,
  roundSelector,
  (questions, round) => questions[round] || {},
);

export default questionByRoundSelector;
