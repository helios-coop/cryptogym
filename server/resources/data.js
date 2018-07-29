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
                text: `## So what is a blockchain? \n A blockchain is a distributed decentralized tamper-proof list of records. \n \n Most people's eyes will glaze over just from reading this, but let's break it into smaller parts. The structure is actually fairly simple and vital to its security. \n \n Each record (called a block) contains some hashed and encoded data, a secure digital fingerprint known as a _hash_, and a reference to the previous block's hash. \n\n To generate the very important hash, the whole block is run though a [cryptographic hash function] (https://simple.wikipedia.org/wiki/Cryptographic_hash_function). If any part of a block is later mutated even just by a single letter, the entire hash would be different. This would cause the link to the subsequent block to break because its hash is no longer matches the reference that next block has of it. This is a fundamental concept behind a blockchain. They are **resistant to tampering.** \n\n Let's set up our blockchain class with a property called \` blocks \` with an empty array so we have somewhere to put our blocks.`,
                test: `describe('Blockchain constructor', () => {
                  it('The blockchain should hold an empty array called blocks', () => {
                    const chain = userCode.Blockchain;
                    const testchain = new chain();
                    window.chai.expect(testchain.blocks.length).to.equal(0);
                    window.chai.expect(testchain.blocks).to.be.an('array');
                  });
                })`,
                placeholder: `class Blockchain {

  // YOUR CODE GOES HERE

}
`,
                prevUrl: '/javascript',
                nextUrl: '/l/javascript/ex/1/set/1/rep/2'
              },
              {
                id: 010102,
                text: `## Blocks\n Our empty blockchain is looking a little weak. Let's add in some blocks to beef it up. To keep things simple let's set up a constructor with only the most essential parts: \n \n * \`previousHash:\` A reference to the hash of the previous block.\n\n * \`index:\` The location of the block in the blockchain. Also called height. \n\n *  \`timestamp:\` A timestamp of creation \n \n * \`data:\` This could be your payment to buy that 10 gallon tub of protein powder or a log of how much you just PR'd on bench. Usually this data is encoded and encrypted in a [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree), but we will revisit this concept later. For now set data to the data arguement passed in to the constructor. \n\n * \`hash:\` A sha256 hash taken from the content of the block. We will dive into this deeper in the next rep so leave it as Null for now`,
                test: `describe('Block constructor', () => {
                  const block = userCode.Block;
                  const testblock = new block(0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f, 1, '4/15/2018', { amt: 5 });
                  it('The Block should have a previous hash', () => {
                    window.chai.expect(testblock.previousHash).to.equal(0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f);
                  });
                  it('The Block should have an index', () => {
                    window.chai.expect(testblock.index).to.equal(1);
                  });
                  it('The Block should have a timestamp', () => {
                    window.chai.expect(testblock.timestamp).to.equal('4/15/2018');
                  });
                  it('The Block should have some data', () => {
                    window.chai.expect(testblock.data.amt).to.equal(5);
                  });
                  it('The Block should have a hash of Null', () => {
                    window.chai.expect(testblock.hash).to.equal(null);
                  });
                })`,
                placeholder: `class Block {

  // YOUR CODE GOES HERE
  
}
`,
                prevUrl: '/l/javascript/ex/1/set/1/rep/1',
                nextUrl: '/l/javascript/ex/1/set/1/rep/3'
              },
              {
                id: 010103,
                text: `## Hashes \n
                \n We can calculate the hash of the block using the Crypto module that is built right into Node.js. 
                \n Take a look at the [documentation] (https://nodejs.org/api/crypto.html) for specific usage. We will need to use: \n * \` .createHash \` to make a new SHA256 hash object \n * \` .update \` it with everything in our block \n * \` .digest \` (encode) it to hex \n * \` .toString \` 
                \n \n Once you do this make sure to update the constructor's this.hash to be calculateHash().
                `,
                test: `describe('Block constructor', () => {
                  it('The Block should have the correct hash', () => {
                    const block = userCode.Block;
                    const testblock = new Block();
                    window.chai.expect(testblock.length).to.equal(5);
                  });
                })`,
                placeholder: `class Block {

  constructor(previousHash, index, timestamp, data) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = null;
  }

  calculateHash() {

    // YOUR CODE GOES HERE

  }
}
`,
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
                text: `## Validation \n\n At any given time we must be able to validate if a block or a chain of blocks are valid in terms of integrity. This is true especially when we receive new blocks from others and must decide whether to accept them or not. \n\n For a block to be valid the following must apply: 
                \n * The index of the block must be one number larger than the previous
                \n * The previousHash of the block match the hash of the previous block
                \n * The hash of the block itself must be valid`,
                test: `describe('The blockchain should be able to validate the integrity of its own blocks:', () => {
                  class Block {
                    constructor(index, timestamp, data, previousHash) {
                      this.index = index;
                      this.timestamp = timestamp;
                      this.data = data;
                      this.previousHash = previousHash;
                      this.hash = this.calculateHash();
                    }
                  
                    calculateHash() {
                      return crypto
                        .createHash('sha256')
                        .update(
                          this.index +
                            this.previousHash +
                            this.timestamp +
                            JSON.stringify(this.data) +
                            this.nonce
                        )
                        .digest('hex')
                        .toString();
                    }
                  }

                  const chain = userCode.Blockchain;
                  const testchain = new chain();
                  const block1 = new Block(0, '01/01/2018', 'Genesis', '0');
                  const block2 = new Block(1, '01/01/2018', '$100', block1.hash);
                  const block3 = new Block(2, '01/01/2018', '$200', block2.hash);
                  testchain.blocks.push(block1)
                  testchain.blocks.push(block2)
                  testchain.blocks.push(block3)

                  it('Returns True if valid', () => {
                    const output = testchain.isChainValid()
                    window.chai.expect(output).to.equal(true);
                  });
                  it('Returns False if index is not along the chain', () => {
                    testchain.blocks[1].index = 4;
                    const output = testchain.isChainValid()
                    window.chai.expect(output).to.equal(false);
                  });
                  it('Returns False if data is tampered with', () => {
                    testchain.blocks[0].data = '$300';
                    const output = testchain.isChainValid()
                    window.chai.expect(output).to.equal(false);
                  });
                  it('Returns False if blocks own hash changes', () => {
                    testchain.blocks[0].hash = '0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f';
                    const output = testchain.isChainValid()
                    window.chai.expect(output).to.equal(false);
                  });
                  it('Returns False if blocks previous hash changes', () => {
                    testchain.blocks[1].hash = '0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f';
                    const output = testchain.isChainValid()
                    window.chai.expect(output).to.equal(false);
                  });
                })`,
                placeholder: `class Blockchain {
  constructor() {
    this.blocks = [];
  }

  isChainValid() {

    // YOUR CODE GOES HERE
    
  }
  
}
`,
                prevUrl: '/l/javascript/ex/1/set/1/rep/3',
                nextUrl: 'null'
              }
            ]
          },
          {
            setName: 'For Removal**',
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
        id: 030000,
        exerciseName: 'TRANSACTIONS',
        sets: []
      },
      {
        id: 040000,
        exerciseName: 'CONSENSUS',
        sets: []
      },
      {
        id: 050000,
        exerciseName: 'WALLETS',
        sets: []
      }
    ]
  }
];

module.exports = data;
