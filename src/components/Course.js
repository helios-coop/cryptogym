import React from 'react';
import { HomeContainer, BannerContainer } from '../styles.js';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Jumbotron,
  Container
} from 'reactstrap';

const Course = () => {
  return (
    <div>
      <HomeContainer>
        <h1 className="display-4 mb-5 text-center text-white">CryptoGym</h1>
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
};

export default Course;
