import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course.js';
import BottomNav from './components/BottomNav.js';
import TopNav from './components/TopNav.js';
import Lesson from './components/Lesson.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={TopNav} />
      <Route exact path="/" component={Course} />
      <Route exact path="/bcoin/lesson" component={CourseHome} />
      <Route exact path="/lotion/lesson" component={CourseHome} />
      <Route path="/lotion/lesson" component={BottomNav} />
      <Route path="/bcoin/lesson" component={BottomNav} />
      <Route path="/lotion/lesson/:lsn" component={Lesson} />
      <Route path="/lotion/lesson/:lsn/chapter/:ch" component={Lesson} />
      <Route path="/bcoin/lesson/:lsn" component={Lesson} />
      <Route path="/bcoin/lesson/:lsn/chapter/:ch" component={Lesson} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
