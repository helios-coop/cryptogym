import React from 'react';
import { TNav, Logo } from '../styles.js';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
	return (
		<div>
			<TNav>
				<Link to="/">
					{' '}
					<Logo src="../logo.svg" />
				</Link>
				<Button color="danger" active>
					Login
				</Button>
			</TNav>
		</div>
	);
};

export default TopNav;
