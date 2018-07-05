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
            className="display-4 mb-4 mt-2 text-center heading quantico"
            style={{ color: '#ffb256' }}
          >
            CryptoGym
          </h1>
          <h3 className="text-center quantico" style={{ color: '#79A7EA' }}>
            Flex Your Blockchain Muscles
          </h3>
          <p className="lead text-white text-center">
            {/* CryptoGym is an interactive training center that teaches you
            blockchain technology one rep at a time. Choose your preferred
            language and let's get started! */}
            You already know blockchain is the next biggest thing since protein powder Adderall shots.<br></br>
            So why are you are still sitting on your lazy developer ass living a decade in the past?<br></br>
            {/* Ready to quit your dead-end office job and start a crypto startup where your secretary calls you 'Bitcoin Daddy'? */}
            It's time to hit some reps and get your brain swole on knowledge!
          </p>
          <div className="d-flex justify-content-center justify-content-around mt-3 mb-2">
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
        </HomeContainer>
      <Footer />
    </div>
  );
};

export default Home;
