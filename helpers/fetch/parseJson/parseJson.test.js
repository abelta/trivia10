import { expect } from 'chai';
import sinon from 'sinon';
import parseJson from '.';

describe('parseJson', () => {
  const response = { json: () => {} };
  const json = 'json';
  sinon.stub(response, 'json').returns(json);

  it('returns the result of the json method of the provided response', () => {
    expect(parseJson(response)).to.equal(json);
  });
});
