import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';
import ExercisesList from './components/ExercisesList.js';
import TopNav from './components/TopNav.js';
import Exercise from './components/Exercise.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={TopNav} />
<<<<<<< HEAD
      <Route exact path="/" component={Home} />
      <Route exact path="/javascript" component={ExercisesList} />
      <Route exact path="/python" component={ExercisesList} />
      <Route exact path="/go" component={ExercisesList} />
      <Route
        path="/l/:language/ex/:ex/set/:set/rep/:rep"
        component={Exercise}
      />
=======
      <Route exact path="/" component={Course} />
      <Route exact path="/javascript/exercise" component={CourseHome} />
      <Route exact path="/python/exercise" component={CourseHome} />
      <Route exact path="/go/exercise" component={CourseHome} />
      <Route
        path="/javascript/exercise/:ex/set/:set/rep/:rep"
        component={Exercise}
      />
      <Route
        path="/javascript/exercise/:ex/set/:set/rep/:rep"
        component={BottomNav}
      />
      <Route
        path="/python/exercise/:ex/set/:set/rep/:rep"
        component={Exercise}
      />
      <Route
        path="/python/exercise/:ex/set/:set/rep/:rep"
        component={BottomNav}
      />
      <Route path="/go/exercise/:ex/set/:set/rep/:rep" component={Exercise} />
      <Route path="/go/exercise/:ex/set/:set/rep/:rep" component={BottomNav} />
>>>>>>> 54a0df82f6fd1da9559d73368347917a5a80676c
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
