import { expect } from 'chai';
import * as types from '../../actions/actionTypes';
import questionsReducer from '.';

const state = [];

describe('questionsReducer', () => {
  describe('receives GAME_RESETTED', () => {
    const action = { type: types.GAME_RESETTED };
    const reduced = questionsReducer(state, action);

    it('sets state to an empty array', () => {
      expect(reduced).to.eql([]);
    });
  });

  describe('receives QUESTIONS_FETCH_SUCCEEDED', () => {
    const questions = ['what', 'where', 'when'];
    const action = {
      type: types.QUESTIONS_FETCH_SUCCEEDED,
      payload: { questions },
    };
    const reduced = questionsReducer(state, action);

    it('sets state to the questions passed in', () => {
      expect(reduced).to.eql(questions);
    });
  });

  describe('receives a different action', () => {
    const action = { type: null };
    const reduced = questionsReducer(state, action);

    it('returns passed in state', () => {
      expect(reduced).to.eql(state);
    });
  });
});
