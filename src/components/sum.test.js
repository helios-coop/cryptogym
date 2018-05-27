const funcs = require('./sum.js');
const funcsBlockchain = require('./blockchain.js');

describe('sum', () => {
  const sum = funcs.sum;
  it('should return sum of arguments', () => {
    window.chai.expect(sum(1, 2)).to.equal(3);
  });
});

describe('calculateHash', () => {
  // proteinCoin.addBlock(new Block(1, '4/15/2018', { amt: 5 }));
  const calculateHash = funcsBlockchain.calculateHash;
  it('should return correct hash', () => {
    window.chai.expect(
      calculateHash().to.equal(
        '5e1b46849ced8db8154cfe07c37df0e09a3abc7851c621d0e0876f012f7a165e'
      )
    );
  });
});
