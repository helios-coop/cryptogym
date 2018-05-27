import React from 'react';
import FontAwesome from 'react-fontawesome';

import { FooterContainer } from '../styles.js';

const Footer = () => {
  return (
    <FooterContainer className="border-top border-warning">
      <h2 className="mt-5 text-center" style={{ color: '#ffb256' }}>
        TEAM
      </h2>
      <div className="d-flex justify-content-center mt-5">
        <div className="mx-5 ">
          <img
            className=" rounded-circle"
            style={{ height: '240px' }}
            src="https://avatars1.githubusercontent.com/u/35357243?s=460&v=4"
            alt="Jeremy Jones photo"
          />
          <h4 className="text-center text-white mt-2">Jeremy A. Jones</h4>
          <div className="d-flex justify-content-center">
            <a href="">
              <FontAwesome
                className="px-2"
                name="linkedin-square"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            <a href="">
              <FontAwesome
                className="px-2"
                name="github"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            <a href="">
              <FontAwesome
                className="px-2"
                name="globe"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            <a href="">
              <FontAwesome
                className="px-2"
                name="envelope"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
          </div>
        </div>
        <div className="mx-5">
          <img
            className="rounded-circle"
            style={{ height: '240px' }}
            src="https://avatars0.githubusercontent.com/u/28818476?s=400&v=4"
            alt="Justin Kaseman photo"
          />
          <h4 className="text-center text-white mt-2">Justin Kaseman</h4>
          <div className="d-flex justify-content-center">
            <a href="">
              <FontAwesome
                className="px-2"
                name="linkedin-square"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            <a href="">
              <FontAwesome
                className="px-2"
                name="github"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            <a href="">
              <FontAwesome
                className="px-2"
                name="globe"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
            <a href="">
              <FontAwesome
                className="px-2"
                name="envelope"
                size="1x"
                style={{ color: 'white' }}
              />
            </a>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
