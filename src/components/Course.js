import React from 'react';
import { HomeContainer, Container } from '../styles.js';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Course = () => {
	return (
		<div>
			<h1 className="display-4 text-center text-white">Crypto Gym</h1>
			<HomeContainer>
				<Container>
					<div className="card bg-light mb-3">
						<h3 className="card-header">Build A Coin With Lotion</h3>
						<div className="card-body">
							<Link to="/lotion/lesson">
								<h5 className="card-title">
									<strong>Lesson 1: </strong>Blockchain
								</h5>
							</Link>
							<h5 className="card-title">
								<strong>Lesson 2: </strong>Transaction Handlers
							</h5>
							<h5 className="card-title">
								<strong>Lesson 3: </strong>Block Handlers
							</h5>
							<h5 className="card-title">
								<strong>Lesson 4: </strong>Make A Cryptocurrency
							</h5>
						</div>
					</div>
				</Container>
				<Container>
					<div className="card bg-light mb-3">
						<h3 className="card-header">Build A Wallet With Bcoin</h3>
						<div className="card-body">
							<Link to="/bcoin/lesson">
								<h5 className="card-title">
									<strong>Lesson 1: </strong>Title
								</h5>
							</Link>
							<h5 className="card-title">
								<strong>Lesson 2: </strong>Title
							</h5>
							<h5 className="card-title">
								<strong>Lesson 3: </strong>Title
							</h5>
							<h5 className="card-title">
								<strong>Lesson 4: </strong>Title
							</h5>
						</div>
					</div>
				</Container>
			</HomeContainer>
		</div>
	);
};

export default Course;
