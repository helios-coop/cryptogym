const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const data = [
  {
    id: 1,
    name: 'Lotion.js',
    lessons: [
      {
        lesson: 1,
        chapters: [
          {
            chapter: 1,
            chapterText: ''
          },
          {
            chapter: 2,
            chapterText: ''
          },
          {
            chapter: 3,
            chapterText: ''
          },
          {
            chapter: 4,
            chapterText: ''
          }
        ],
        introText:
          "In this lesson you will start by learning about blockchain technology and the three protocols that make up a blockchain. Excited? Let's get started!"
      },
      {
        lesson: 2,
        chapters: [
          {
            chapter: 1,
            chapterText: ''
          },
          {
            chapter: 2,
            chapterText: ''
          },
          {
            chapter: 3,
            chapterText: ''
          },
          {
            chapter: 4,
            chapterText: ''
          }
        ],
        introText: ''
      },
      {
        lesson: 3,
        chapters: [
          {
            chapter: 1,
            chapterText: ''
          },
          {
            chapter: 2,
            chapterText: ''
          },
          {
            chapter: 3,
            chapterText: ''
          },
          {
            chapter: 4,
            chapterText: ''
          }
        ],
        introText: ''
      },
      {
        lesson: 4,
        chapters: [
          {
            chapter: 1,
            chapterText: ''
          },
          {
            chapter: 2,
            chapterText: ''
          },
          {
            chapter: 3,
            chapterText: ''
          },
          {
            chapter: 4,
            chapterText: ''
          }
        ],
        introText: ''
      }
    ]
  },
  {
    id: 2,
    name: 'Lotion.js',
    lessons: [
      {
        lesson: 1,
        chapters: [
          {
            chapter: 1,
            chapterText: ''
          },
          {
            chapter: 2,
            chapterText: ''
          },
          {
            chapter: 3,
            chapterText: ''
          },
          {
            chapter: 4,
            chapterText: ''
          }
        ],
        introText: ''
      },
      {
        lesson: 2,
        chapters: [
          {
            chapter: 1,
            chapterText: ''
          },
          {
            chapter: 2,
            chapterText: ''
          },
          {
            chapter: 3,
            chapterText: ''
          },
          {
            chapter: 4,
            chapterText: ''
          }
        ],
        introText: ''
      },
      {
        lesson: 3,
        chapters: [
          {
            chapter: 1,
            chapterText: ''
          },
          {
            chapter: 2,
            chapterText: ''
          },
          {
            chapter: 3,
            chapterText: ''
          },
          {
            chapter: 4,
            chapterText: ''
          }
        ],
        introText: ''
      },
      {
        lesson: 4,
        chapters: [
          {
            chapter: 1,
            chapterText: ''
          },
          {
            chapter: 2,
            chapterText: ''
          },
          {
            chapter: 3,
            chapterText: ''
          },
          {
            chapter: 4,
            chapterText: ''
          }
        ],
        introText: ''
      }
    ]
  }
];

server.get('/:module/:lesson', (req, res) => {
  const { module } = req.params;
  const { lesson } = req.params;
  const info = data[module].lessons.filter(
    lessons => lessons.lesson.toString() === lesson
  );
  console.log(info[0].introText);
  res.status(200).json(info[0].introText);
});

// server.get('/:module/:lesson/:chapter', (req, res) => {
//   const note = notes.filter(note => note.id.toString() === req.params.id)[0];
//   res.status(200).json(note);
// });

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('API is running'));
