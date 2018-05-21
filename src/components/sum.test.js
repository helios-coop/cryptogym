import sum from './sum.js';

describe('sum', function () {
  it('should return sum of arguments', function () {
    window.chai.expect(sum(1, 2)).to.equal(3);
  });
});