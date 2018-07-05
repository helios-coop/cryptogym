import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from '../styles/styles.js';

const Footer = () => {
  return (
    <FooterNav>
      <Link
        className="text-white"
        style={{ textDecoration: 'none', fontSize: '20px'}}
        to="/team"
      >
        Team
      </Link>
      <div className="text-white" style={{ fontSize: '11px'}}>© 2018 CryptoGym</div>
    </FooterNav>
  );
};

export default Footer;
