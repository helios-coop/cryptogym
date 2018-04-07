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
			<Route path="/lesson" component={BottomNav} />
			<Route path="/lesson/:lsn" component={Lesson} />
			<Route path="/lesson/:lsn/chapter/:ch" component={Lesson} />
		</div>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
