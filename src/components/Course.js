import React from 'react';
import { HomeContainer, JSLogo, PythonLogo } from '../styles.js';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

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
        <div className="d-flex justify-content-center justify-content-around mt-5 logo-container">
          <JSLogo>
            <Link to="/javascript/exercise" style={{ textDecoration: 'none' }}>
              <h3 className="text-center text-white my-4">JavaScript</h3>
              <Media
                object
                src={require('../images/js-logo.png')}
                alt="JavasScript Logo"
                style={{ height: '240px' }}
              />
            </Link>
          </JSLogo>
          <PythonLogo>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h3 className="text-center text-white my-4">Python</h3>
              <Media
                object
                src={require('../images/python-logo.png')}
                alt="Python Logo"
                style={{ height: '240px' }}
              />
              <h5 className="text-center text-white my-3">Coming Soon</h5>
            </Link>
          </PythonLogo>
        </div>
      </HomeContainer>
    </div>
  );
};

export default Course;
