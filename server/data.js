const data = [
  {
    name: 'JavaScript',
    exercises: [
      {
        id: 010000,
        exerciseName: 'Blockchain Basics',
        sets: [
          {
            id: 010100,
            setName: 'What is a Blockchain?',
            reps: [
              {
                id: 010101,
                text: `## What is a blockchain?\nA blockchain is literally a chain of blocks. In other words, it's a data structure where each block contains a reference to the previous block, some data, and a secure digital fingerprint known as a _hash._\n\nTo generate a hash, a block is run though a cryptographic hash function that outputs a fixed length alphanumeric string. This hash is placed into the next block, so that it has a reference back to the previous block's hash. If any part of a block is mutated after it's been created, the hash would also change. Therefore, all subsequent blocks would contain an incorrect previous hash. This is the fundamental idea behind a blockchain. It is _immutable._\n\nLet's look at an example.`,
                code: `describe('calculateHash', () => {
                  it('should return correct hash', () => {
                    const coin = userCode.Block;
                    const testcoin = new coin(1, '4/15/2018', { amt: 5 });
                
                    window.chai.expect(testcoin.hash).to.equal('b06bab5c733ce207c35e34000722a33a4d0d701aadca2599129eac68cef3795e');
                  });
                })`,
                prevUrl: '/javascript',
                nextUrl: '/l/javascript/ex/1/set/1/rep/2'
              },
              {
                id: 010102,
                text: 'How else can we say this? Maybe a different vowel?',
                code: 'console.log (`hello wurld`)',
                prevUrl: '/l/javascript/ex/1/set/1/rep/1',
                nextUrl: '/l/javascript/ex/1/set/1/rep/3'
              },
              {
                id: 010103,
                text:
                  "Alright let's get weird. Try a DIFFERENT vowel that makes sense.",
                code: 'console.log (`hello wirld`)',
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
                text: 'some text',
                code: 'some code',
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
                text: 'some text',
                code: 'some code',
                prevUrl: 'null',
                nextUrl: 'null'
              }
            ]
          }
        ]
      },
      {
        id: 020000,
        exerciseName: 'Consensus',
        sets: []
      },
      {
        id: 020000,
        exerciseName: 'Smart Contracts',
        sets: []
      },
      {
        id: 020000,
        exerciseName: 'Wallet',
        sets: []
      }
    ]
  }
];

module.exports = data;
