import { expect } from 'chai';
import checkStatus from '.';

describe('checkStatus', () => {
  describe('receives valid response', () => {
    const response = { status: 200, statusText: 'ok' };
    it('returns response', () => {
      expect(checkStatus(response)).to.eql(response);
    });
  });

  describe('receives errored response', () => {
    const response = { status: 400, statusText: 'Error' };
    it('throws an error', () => {
      expect(checkStatus.bind(response)).to.throw();
    });
  });
});
