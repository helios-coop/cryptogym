import React from 'react';
import { TNav, Logo } from '../styles.js';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
	return (
		<TNav>
			<Link to="/">
				<Logo src={require('../images/CryptoGym.png')} alt={'Logo'} />
			</Link>
			<Button
				color="danger"
				size="sm"
				style={{ height: '40px', margin: '2%' }}
				active
			>
				Login
			</Button>
		</TNav>
	);
};

export default TopNav;
