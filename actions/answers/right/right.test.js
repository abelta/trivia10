import { expect } from 'chai';
import * as types from '../../actionTypes';
import right from '.';

describe('right', () => {
  const action = right();

  describe('returns an action', () => {
    it('has type ANSWER_RIGHT', () => {
      expect(action.type).to.eql(types.ANSWER_RIGHT);
    });
  });
});
