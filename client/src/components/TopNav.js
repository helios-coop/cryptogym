import React from 'react';
import { TNav, Logo } from '../styles/styles.js';
import { Link } from 'react-router-dom';
import '../styles/team.css';

const TopNav = () => {
  return (
    <TNav>
      <Link to="/">
        <Logo
          src={require('../images/CryptoGym.png')}
          alt={'Logo'}
          style={{ height: '70px' }}
        />
      </Link>
      <Link
        className="team quantico"
        style={{
          textDecoration: 'none',
          fontSize: '20px',
          height: '40px',
          marginTop: '10px'
        }}
        to="/team"
      >
        TEAM
      </Link>
    </TNav>
  );
};

export default TopNav;
