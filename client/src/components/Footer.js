import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from '../styles/styles.js';

const Footer = () => {
  return (
    <FooterNav className="border-top border-warning">
      <div className="text-white">© 2018 CryptoGym</div>
      <Link
        className="text-white"
        style={{ textDecoration: 'none' }}
        to="/team"
      >
        Team
      </Link>
    </FooterNav>
  );
};

export default Footer;
