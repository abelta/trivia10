import { expect } from 'chai';
import * as types from '../../actions/actionTypes';
import gameReducer from '.';

const state = {
  round: 1,
  score: 1,
};

describe('gameReducer', () => {
  describe('receives ANSWER RIGHT', () => {
    const action = { type: types.ANSWER_RIGHT };
    const reduced = gameReducer(state, action);

    it('increases round', () => {
      expect(reduced.round).to.eql(state.round + 1);
    });

    it('increases score', () => {
      expect(reduced.score).to.eql(state.score + 1);
    });
  });

  describe('receives ANSWER WRONG', () => {
    const action = { type: types.ANSWER_WRONG };
    const reduced = gameReducer(state, action);

    it('increases round', () => {
      expect(reduced.round).to.eql(state.round + 1);
    });

    it('does not increase score', () => {
      expect(reduced.score).to.eql(state.score);
    });
  });

  describe('receives GAME_RESETTED', () => {
    const action = { type: types.GAME_RESETTED };
    const reduced = gameReducer(state, action);

    it('sets round to zero', () => {
      expect(reduced.round).to.eql(0);
    });

    it('sets score to zero', () => {
      expect(reduced.score).to.eql(0);
    });
  });

  describe('receives a different action', () => {
    const action = { type: null };
    const reduced = gameReducer(state, action);

    it('returns passed in state', () => {
      expect(reduced).to.eql(state);
    });
  });
});
