const data = [
  {
    name: 'JavaScript',
    exercises: [
      {
        id: 010000,
        exerciseName: 'BLOCKCHAIN',
        sets: [
          {
            id: 010100,
            setName: 'What is a Blockchain?',
            reps: [
              {
                id: 010101,
                text: `## What is a blockchain?\n  A blockchain is literally a chain of blocks. In other words, it's simply a data structure where each block contains a reference to the previous block, some data, and a secure digital fingerprint known as a _hash._\n\nTo generate a hash, a block is run though a cryptographic hash function that outputs a fixed length alphanumeric string. This hash is placed into the next block, so that it has a reference back to the previous block's hash. If any part of a block is mutated after it's been created, the hash would also change. Therefore, all subsequent blocks would contain an incorrect previous hash. This is the fundamental idea behind a blockchain. It is _immutable._ \n\n Initialize a variable called <code>blocks</code> to an empty array.`,
                test: `describe('Blockchain constructor', () => {
                  it('The blockchain should hold an array called blocks', () => {
                    const chain = userCode.Blockchain;
                    const testchain = new chain();
                    window.chai.expect(testchain.blocks.length).to.equal(0);
                    window.chai.expect(testchain.blocks).to.be.an('array');
                  });
                })`,
                placeholder: `class Blockchain {

  // YOUR CODE GOES HERE

}
                
module.exports = {
  Blockchain
};`,
                prevUrl: '/javascript',
                nextUrl: '/l/javascript/ex/1/set/1/rep/2'
              },
              {
                id: 010102,
                text: `## Blocks\n Our empty blockchain is looking lonely. Let's add in some blocks. To keep things simple let's add only to the most essential parts: \n \n \`previousHash:\` A reference to the hash of the previous block.\n\n\`index:\` The location of the block in the blockchain \n\n\`timestamp:\` A timestamp \n \n \`data:\` This could be your payment to buy that 10 gallon tub of protein powder or a log of how much you PR'd on bench.\n\n \`hash:\` A sha256 hash taken from the content of the block.`,
                test: `describe('Block constructor', () => {
                  it('The Block should have a previous hash, timestamp, index, data, and hash', () => {
                    const block = userCode.Block;
                    const testblock = new block();
                    window.chai.expect(testblock.length).to.equal(5);
                  });
                })`,
                placeholder: `
class Block {

  // YOUR CODE GOES HERE
  
}

module.exports = {
  Block
};`,
                prevUrl: '/l/javascript/ex/1/set/1/rep/1',
                nextUrl: '/l/javascript/ex/1/set/1/rep/3'
              },
              {
                id: 010103,
                text: `##Hashes\n The block hash is one of the most important property of the block. The hash is calculated over all data of the block. This means that if anything in the block changes, the original hash is no longer valid. The block hash can also be thought as the unique identifier of the block. For instance, blocks with same index can appear, but they all have unique hashes.
                \n We calculate the hash of the block using the following code:
                \n <code>const calculateHash = (index: number, previousHash: string, timestamp: number, data: string): string =>
                CryptoJS.SHA256(index + previousHash + timestamp + data).toString();</code>
                \n It should be noted that the block hash does not yet have anything to do with mining as there is no proof-of-work problem to solve. We use block hashes to preserve the integrity of the block and to explicitly reference the previous block.
                The importance of the hash is that the block cannot be modified without changing the hash of every consecutive block.
                This is demonstrated in the example below. If the data in block 44 is changed from “DESERT” to “STREET”, all hashes of the consecutive blocks must be changed. This is because the hash of the block depends on the value of the previousHash (among other things).`,
                test: `describe('Block constructor', () => {
                  it('The Block should have the correct hash', () => {
                    const block = userCode.Block;
                    const testblock = new block();
                    window.chai.expect(testblock.length).to.equal(5);
                  });
                })`,
                placeholder: `
class Block {

  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {

    // YOUR CODE GOES HERE

  }
}

module.exports = {
  Block
};`,
                prevUrl: '/l/javascript/ex/1/set/1/rep/2',
                nextUrl: '/l/javascript/ex/1/set/2/rep/1'
              }
            ]
          },
          {
            setName: 'The Genesis block',
            reps: [
              {
                id: 010201,
                text: `## Validation \n\n At any given time we must be able to validate if a block or a chain of blocks are valid in terms of integrity. This is true especially when we receive new blocks from other nodes and must decide whether to accept them or not. For a block to be valid the following must apply: The index of the block must be one number larger than the previous
                The previousHash of the block match the hash of the previous block
                The hash of the block itself must be valid`,
                test: 'some code',
                placeholder: `class Blockchain {
  constructor() {
    this.blocks = [];
  }

  isChainValid() {

    // YOUR CODE GOES HERE

  }
  
}
                
module.exports = {
  Blockchain
};`,
                prevUrl: '/l/javascript/ex/1/set/1/rep/3',
                nextUrl: '/l/javascript/ex/1/set/3/rep/1'
              }
            ]
          },
          {
            setName: 'Chain it together',
            reps: [
              {
                id: 010301,
                text: '## Putting it all together',
                test: `describe('calculateHash', () => {
                  it('should return correct hash', () => {
                    const coin = userCode.Block;
                    const testcoin = new coin(1, '4/15/2018', { amt: 5 });
                
                    window.chai.expect(testcoin.hash).to.equal('b06bab5c733ce207c35e34000722a33a4d0d701aadca2599129eac68cef3795e');
                  });
                })`,
                placeholder: '',
                prevUrl: '/l/javascript/ex/1/set/2/rep/1',
                nextUrl: 'null'
              }
            ]
          }
        ]
      },
      {
        id: 020000,
        exerciseName: 'PROOF of WORK',
        sets: []
      },
      {
        id: 020000,
        exerciseName: 'TRANSACTIONS',
        sets: []
      },
      {
        id: 020000,
        exerciseName: 'WALLET',
        sets: []
      },
      {
        id: 020000,
        exerciseName: 'CONTRACTS',
        sets: []
      }
    ]
  }
];

module.exports = data;
