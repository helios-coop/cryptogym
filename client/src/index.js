import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';
import ExercisesList from './components/ExercisesList.js';
import TopNav from './components/TopNav.js';
import Exercise from './components/Exercise.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={TopNav} />
      <Route exact path="/" component={Home} />
      <Route exact path="/javascript" component={ExercisesList} />
      <Route exact path="/python" component={ExercisesList} />
      <Route exact path="/go" component={ExercisesList} />
      <Route
        path="/l/:language/ex/:ex/set/:set/rep/:rep"
        component={Exercise}
      />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
