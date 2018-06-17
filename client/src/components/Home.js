import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

import { HomeContainer, JSLogo, PythonLogo } from '../styles/styles.js';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <HomeContainer>
          <h1
            className="display-4 mb-4 mt-2 text-center heading quantico"
            style={{ color: '#ffb256' }}
          >
            CryptoGym
          </h1>
          <h3 className="text-center quantico" style={{ color: '#79A7EA' }}>
            Flex Your Blockchain Muscles
          </h3>
          <p className="lead text-white text-center px-5">
            CryptoGym is an interactive training center that teaches you
            blockchain technology one rep at a time. Choose your preferred
            language and let's get started!
          </p>
          <div className="d-flex justify-content-center justify-content-around mt-5">
            <JSLogo>
              <Link to="/javascript" style={{ textDecoration: 'none' }}>
                <h3 className="text-center text-white my-4 quantico">
                  JavaScript
                </h3>
                <Media
                  object
                  src={require('../images/js-logo.png')}
                  alt="JavasScript Logo"
                  style={{ height: '240px' }}
                />
              </Link>
            </JSLogo>
            <PythonLogo>
              <Link to="/python" style={{ textDecoration: 'none' }}>
                <h3 className="text-center text-white my-4 quantico">Python</h3>
                <Media
                  object
                  src={require('../images/python-logo.png')}
                  alt="Python Logo"
                  style={{ height: '240px' }}
                />
                <h5 className="text-center text-white mt-3 mb-5">
                  Coming Soon
                </h5>
              </Link>
            </PythonLogo>
          </div>
          <br />
        </HomeContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
