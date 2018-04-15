import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course.js';
import CourseHome from './components/CourseHome.js';
import BottomNav from './components/BottomNav.js';
import TopNav from './components/TopNav.js';
import Exercise from './components/Exercise.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
	<Router>
		<div>
			<Route path="/" component={TopNav} />
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
		</div>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
