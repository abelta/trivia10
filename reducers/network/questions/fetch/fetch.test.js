import { expect } from 'chai';
import * as types from '../../../../actions/actionTypes';
import fetchReducer from '.';

const state = {
  error: false,
  loading: false,
};

describe('fetchReducer', () => {
  describe('receives QUESTIONS_FETCH_FAILED', () => {
    const error = 'error';
    const action = {
      type: types.QUESTIONS_FETCH_FAILED,
      payload: { error },
    };
    const reduced = fetchReducer(state, action);

    it('sets error to the error that was passed in', () => {
      expect(reduced.error).to.eql(error);
    });

    it('sets loading to false', () => {
      expect(reduced.loading).to.be.false;
    });
  });

  describe('receives QUESTIONS_FETCH_SENT', () => {
    const action = { type: types.QUESTIONS_FETCH_SENT };
    const reduced = fetchReducer(state, action);

    it('sets error to false', () => {
      expect(reduced.error).to.be.false;
    });

    it('sets loading to true', () => {
      expect(reduced.loading).to.be.true;
    });
  });

  describe('receives QUESTIONS_FETCH_SUCCEEDED', () => {
    const action = { type: types.QUESTIONS_FETCH_SUCCEEDED };
    const reduced = fetchReducer(state, action);

    it('sets error to fase', () => {
      expect(reduced.error).to.be.false;
    });

    it('sets loading to false', () => {
      expect(reduced.loading).to.be.false;
    });
  });

  describe('receives a different action', () => {
    const action = { type: null };
    const reduced = fetchReducer(state, action);

    it('returns passed in state', () => {
      expect(reduced).to.eql(state);
    });
  });
});
