import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Team from './components/Team.js';
import ExercisesList from './components/ExercisesList.js';
import TopNav from './components/TopNav.js';
import Exercise from './components/Exercise.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={TopNav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/callback" component={Login} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/javascript" component={ExercisesList} />
        <Route exact path="/python" component={ExercisesList} />
        <Route exact path="/go" component={ExercisesList} />
        <Route
          path="/l/:language/ex/:ex/set/:set/rep/:rep"
          component={Exercise}
        />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
