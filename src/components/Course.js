import React from 'react';
import { HomeContainer, BannerContainer, CardTop } from '../styles.js';
import { Link } from 'react-router-dom';
import './Course.css';
import {
<<<<<<< HEAD
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardDeck,
	CardSubtitle,
	CardBody,
} from 'reactstrap';

const Course = () => {
	return (
		<div className="d-flex justify-content-center">
			<HomeContainer>
				<h1 className="display-4 mb-5 mt-3 text-center text-white">
					CryptoGym
				</h1>
				<h3 className="text-white text-center">Flex Your Blockchain Muscles</h3>
				<p className="lead text-white text-center px-5">
					CryptoGym is an interactive training center that teaches you
					blockchain technology one rep at a time. Choose your preferred
					language and let's get started!
				</p>
				<CardDeck className="mt-5">
					<Card className="border-dark">
						<Link to="/javascript/exercise" style={{ textDecoration: 'none' }}>
							{' '}
							<CardImg
								className="bg-dark"
								top
								width="100%"
								src={require('../images/js-logo.png')}
								alt="JavaScript"
							/>{' '}
							<CardBody>
								<CardTitle className="text-center">JavaScript</CardTitle>
								<CardSubtitle />
							</CardBody>
						</Link>
					</Card>
					<Card className="border-dark">
						<CardImg
							className="bg-light"
							top
							width="100%"
							src={require('../images/python-logo.png')}
							alt="Python"
						/>
						<CardBody>
							<CardTitle className="text-center">Python</CardTitle>
							<CardSubtitle className="text-center">Coming Soon</CardSubtitle>
						</CardBody>
					</Card>
					<Card className="border-dark">
						<CardImg
							className="bg-secondary"
							top
							width="100%"
							src={require('../images/go-logo.png')}
							alt="Go"
						/>
						<CardBody>
							<CardTitle className="text-center">Go</CardTitle>
							<CardSubtitle className="text-center">Coming Soon</CardSubtitle>
						</CardBody>
					</Card>
				</CardDeck>
			</HomeContainer>
		</div>
	);
=======
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap';

const Course = () => {
  return (
    <div className="d-flex justify-content-center">
      <HomeContainer>
        <h1 className="display-4 mb-5 mt-3 text-center text-white">
          CryptoGym
        </h1>
        <h3 className="text-white text-center">Flex Your Blockchain Muscles</h3>
        <p className="lead text-white text-center px-5">
          CryptoGym is an interactive training center that teaches you
          blockchain technology one rep at a time. Choose your preferred
          language and let's get started!
        </p>
        <CardDeck className="mt-5">
          <Card className="border-dark">
            <Link to="/javascript/exercise" style={{ textDecoration: 'none' }}>
              {' '}
              <CardBody className="card-js">
                <CardTitle className="text-center">JavaScript</CardTitle>
              </CardBody>
              <CardImg
                className="card-js rounded-0"
                src={require('../images/js-logo.png')}
                alt="JavaScript"
              />{' '}
              <CardBody className="card-js">
                <CardSubtitle className="text-center">
                  <br />
                </CardSubtitle>
              </CardBody>
            </Link>
          </Card>

          <Card className="border-dark">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <CardBody className="card-python">
                <CardTitle className="text-center">Python</CardTitle>
              </CardBody>
              <CardImg
                className="bg-light rounded-0"
                src={require('../images/python-logo.png')}
                alt="Python"
              />
              <CardBody className="card-python">
                <CardSubtitle className="text-center">Coming Soon</CardSubtitle>
              </CardBody>
            </Link>
          </Card>

          <Card className="border-dark">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <CardBody className="card-go">
                <CardTitle className="text-center">Go</CardTitle>
              </CardBody>
              <CardImg
                className="bg-secondary rounded-0"
                src={require('../images/go-logo.png')}
                alt="Go"
              />
              <CardBody className="card-go">
                <CardSubtitle className="text-center">Coming Soon</CardSubtitle>
              </CardBody>
            </Link>
          </Card>
        </CardDeck>
      </HomeContainer>
    </div>
  );
>>>>>>> 658f5f035d4ab71a22694541110bfc5d5f93a451
};

export default Course;
