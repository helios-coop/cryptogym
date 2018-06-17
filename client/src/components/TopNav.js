import React from 'react';
import { TNav, Logo } from '../styles/styles.js';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
      <Button
        color="danger"
        size="sm"
        style={{ height: '40px', marginTop: '10px' }}
        active
      >
        Login
      </Button>
    </TNav>
  );
};

export default TopNav;
