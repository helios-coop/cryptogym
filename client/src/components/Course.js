import React from 'react';
import { HomeContainer, Container, LessonNav } from '../styles.js';
import { Link } from 'react-router-dom';

const Course = () => {
	return (
		<div>
			<HomeContainer>
				<Container>
					<LessonNav>
						<h1>Build a blockchain with Lotion.js</h1>
					</LessonNav>
					<Link to="/lesson/1">
						<LessonNav>
							<h1>Lesson 1: Fuckkkk</h1>
						</LessonNav>
					</Link>
					<LessonNav>
						<h1>Lesson 2: Fuckkkk</h1>
					</LessonNav>
					<LessonNav>
						<h1>Lesson 3: Fuckkkk</h1>
					</LessonNav>
				</Container>
				<Container>
					<LessonNav>
						<h1>Build a blockchain Bcoin</h1>
					</LessonNav>
					<Link to="/lesson/1">
						<LessonNav>
							<h1>Lesson 1: Fuckkkk</h1>
						</LessonNav>
					</Link>
					<LessonNav>
						<h1>Lesson 2: Fuckkkk</h1>
					</LessonNav>
					<LessonNav>
						<h1>Lesson 3: Fuckkkk</h1>
					</LessonNav>
				</Container>
			</HomeContainer>
		</div>
	);
};

export default Course;
