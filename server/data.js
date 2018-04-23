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
                text:
                  "Let's try a simple console log with string literals. Let's say hello to the world.",
                code: 'console.log (`hello world`)',
                prevUrl: '/javascript',
                nextUrl: '/l/javascript/ex/1/set/1/rep/2',
              },
              {
                id: 010102,
                text: 'How else can we say this? Maybe a different vowel?',
                code: 'console.log (`hello wurld`)',
                prevUrl: '/l/javascript/ex/1/set/1/rep/1',
                nextUrl: '/l/javascript/ex/1/set/1/rep/3',
              },
              {
                id: 010103,
                text:
                  "Alright let's get weird. Try a DIFFERENT vowel that makes sense.",
                code: 'console.log (`hello wirld`)',
                prevUrl: '/l/javascript/ex/1/set/1/rep/2',
                nextUrl: '/l/javascript/ex/1/set/2/rep/1',
              },
            ],
          },
          {
            setName: 'The Genesis block',
            reps: [
              {
                id: 010201,
                text: 'some text',
                code: 'some code',
                prevUrl: '/l/javascript/ex/1/set/1/rep/3',
                nextUrl: '/l/javascript/ex/1/set/3/rep/1',
              },
            ],
          },
          {
            setName: 'Chain it together',
            reps: [
              {
                id: 010301,
                text: 'some text',
                code: 'some code',
                prevUrl: 'null',
                nextUrl: 'null',
              },
            ],
          },
        ],
      },
      {
        id: 020000,
        exerciseName: 'Consensus',
        sets: [],
      },
      {
        id: 020000,
        exerciseName: 'Smart Contracts',
        sets: [],
      },
      {
        id: 020000,
        exerciseName: 'Wallet',
        sets: [],
      },
    ],
  },
];

module.exports = data;
