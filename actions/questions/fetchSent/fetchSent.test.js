import { expect } from 'chai';
import * as types from '../../actionTypes';
import fetchSent from '.';

describe('fetchSent', () => {
  const action = fetchSent();

  it('has type QUESTIONS_FETCH_SENT', () => {
    expect(action.type).to.eql(types.QUESTIONS_FETCH_SENT);
  });
});
