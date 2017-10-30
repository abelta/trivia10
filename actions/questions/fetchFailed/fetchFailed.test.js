import { expect } from 'chai';
import * as types from '../../actionTypes';
import fetchFailed from '.';

describe('fetchFailed', () => {
  const error = 'error';
  const action = fetchFailed({ error });

  it('has type QUESTIONS_FETCH_FAILED', () => {
    expect(action.type).to.eql(types.QUESTIONS_FETCH_FAILED);
  });

  describe('payoad', () => {
    it('includes error passed as parameter', () => {
      expect(action.payload.error).to.eql(error);
    });
  });
});
