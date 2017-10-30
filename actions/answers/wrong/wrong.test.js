import { expect } from 'chai';
import * as types from '../../actionTypes';
import wrong from '.';

describe('wrong', () => {
  const action = wrong();

  describe('returns an action', () => {
    it('has type ANSWER_WRONG', () => {
      expect(action.type).to.eql(types.ANSWER_WRONG);
    });
  });
});
