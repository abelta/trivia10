import { expect } from 'chai';
import * as types from '../../actionTypes';
import fetchSucceeded from '.';

describe('fetchSucceeded', () => {
  const questions = ['why', 'who', 'where'];
  const action = fetchSucceeded({ questions });

  it('has type QUESTIONS_FETCH_SUCCEEDED', () => {
    expect(action.type).to.eql(types.QUESTIONS_FETCH_SUCCEEDED);
  });

  describe('payload', () => {
    describe('includes questions passed as parameter', () => {
      expect(action.payload.questions).to.eql(questions);
    });
  });
});
