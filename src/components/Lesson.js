import React, { Component } from 'react';
import axios from 'axios';
import { LessonContainer } from '../styles.js';
import Content from './Content.js';
import Editor from './Editor.js';

class Lesson extends Component {
	state = {
		chapter: [],
	};

	render() {
		return (
			<LessonContainer>
				<Content />
				<Editor />
			</LessonContainer>
		);
	}

	componentDidMount() {
		//axios get by id, lesson, chapter
	}
}

export default Lesson;
