const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const data = require('./resources/data.js');

server.get('/exercises/:languageNumber', (req, res) => {
  const lang = req.params.languageNumber;

  if (lang) {
    const exercises = [];
    data[lang].exercises.forEach(exercise =>
      exercises.push(exercise.exerciseName)
    );
    res.status(200).json(exercises);
  } else res.status(422).json('provide language');
});

server.get('/l/:language/ex/:exercise/set/:set/rep/:rep', (req, res) => {
  const lang = req.params.language === 'javascript' ? 0 : 1;
  const { exercise, set, rep } = req.params;

  if (exercise && set && rep) {
    res
      .status(200)
      .json(data[lang].exercises[exercise - 1].sets[set - 1].reps[rep - 1]);
  } else res.status(422).json('provide inputs');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('API is running'));
