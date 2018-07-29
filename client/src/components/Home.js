import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';

import { HomeContainer, JSLogo, PythonLogo } from '../styles/styles.js';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <h1
          className="mb-2 mt-2 text-center heading quantico"
          style={{ color: '#ffb256' }}
        >
          CryptoGym<span className="beta">beta</span>
        </h1>
        <h3 className="text-center quantico" style={{ color: '#79A7EA' }}>
          Flex Your Blockchain Muscles
        </h3>
        <p className="lead text-white text-center mt-3 px-1">
          CryptoGym is an interactive training center that teaches you
          blockchain technology one rep at a time. Choose your preferred
          language and let's get lifting!
        </p>
        <div className="d-flex justify-content-center justify-content-around mt-3 mb-2">
          <JSLogo>
            <Link to="/javascript" style={{ textDecoration: 'none' }}>
              <h3 className="text-center my-4 quantico lang-logo-title lang-logo-title-js">
                JavaScript
              </h3>
              <Media
                object
                src={require('../images/js-logo.png')}
                alt="JavasScript Logo"
                style={{ height: '240px' }}
                id="JSLogo"
              />
            </Link>
          </JSLogo>
          <PythonLogo>
            <Link to="#" style={{ textDecoration: 'none' }}>
              {/* to='/python' */}
              <h3 className="text-center my-4 quantico lang-logo-title lang-logo-title-py">
                Python
              </h3>
              <Media
                object
                src={require('../images/python-logo.png')}
                alt="Python Logo"
                style={{ height: '240px' }}
                id="PythonLogo"
              />
              <h6 className="text-center text-white mt-3 mb-5">Coming Soon</h6>
            </Link>
          </PythonLogo>
        </div>
      </HomeContainer>
      <Footer />
    </div>
  );
};

export default Home;
