import React from 'react';
import FontAwesome from 'react-fontawesome';
import Footer from './Footer';
import { TeamContainer } from '../styles/styles.js';

const Team = () => {
  return (
    <TeamContainer>
      <h2 className="mt-5 text-center quantico" style={{ color: '#ffb256' }}>
        TEAM
      </h2>
      <div className="d-flex justify-content-center mt-5 mobilecolumn">
        <div className="mt-5 mx-5 ">
          <img
            className=" rounded-circle"
            style={{ height: '240px' }}
            src="https://avatars1.githubusercontent.com/u/35357243?s=460&v=4"
            alt="Jeremy Jones"
          />
          <h4 className="text-center text-white mt-2">Jeremy A. Jones</h4>
          <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/jeremyalexanderjones/">
              <FontAwesome
                className="px-2"
                name="linkedin-square"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            <a href="https://github.com/crypto-jones">
              <FontAwesome
                className="px-2"
                name="github"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            `<a href="https://medium.com/@jeremy.a.jones">
              <FontAwesome name="medium" size="1x" style={{ color: 'white' }} />
            </a>
          </div>
        </div>
        <div className="my-5 mx-5">
          <img
            className="rounded-circle"
            style={{ height: '240px' }}
            src="https://avatars0.githubusercontent.com/u/28818476?s=400&v=4"
            alt="Justin Kaseman"
          />
          <h4 className="text-center text-white mt-2">Justin Kaseman</h4>
          <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/justin-kaseman/">
              <FontAwesome
                className="px-2"
                name="linkedin-square"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            <a href="https://github.com/Jkasem">
              <FontAwesome
                className="px-2"
                name="github"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>

            <a href="https://medium.com/@justinkaseman">
              <FontAwesome
                className="px-2"
                name="medium"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </TeamContainer>
  );
};

export default Team;
