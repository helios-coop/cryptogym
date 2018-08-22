const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const data = require('./resources/data.js');

const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.GITHUB_CLIENT_ID}`;

server.route('/auth')
  .get((request, response) => {
    axios.get(GITHUB_OAUTH_URL)
      .then((res) => {
        const data = res.data;
        console.log(data);
        response.send(data);
      })
      .catch(err => {
        console.log(err);
      });
  });

server.route('/auth/callback')
  .get((request, response) => {
    const session_code = request.query.code;
    axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: session_code
    })
      .then(res => {
        if (res.data) {
          const data = res.data;

          const access_token_param = data.match(/^(access_token)[^&]+/g)[0];
          const access_token = access_token_param.split("=")[1];

          const scope_param = data.match(/(scope)[^&]+/g)[0];
          const has_email_scope = scope_param.includes('email');

          if (has_email_scope) {
            axios.get('https://api.github.com/user/emails', {
              params: {access_token}
            })
              .then(res => {
                const emails = res.data;
                // TODO: create helper to check for primary email
                response.send(emails[0].email);
              })
              .catch(err => {
                console.log(err);
              });
          } // endif has_email_scope

          // TODO: also get the user id from github and send back to client
          
        } // endif res.data
      })
      .catch(err => {
        console.log(err);
      });
  });

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
