import { expect } from 'chai';
import * as types from '../../actionTypes';
import resetted from '.';

describe('resetted', () => {
  const action = resetted();

  describe('returns an action', () => {
    it('has type GAME_RESETTED', () => {
      expect(action.type).to.eql(types.GAME_RESETTED);
    });
  });
});
