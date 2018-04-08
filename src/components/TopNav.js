import React from 'react';
import { TNav, Logo } from '../styles.js';
import { Button } from 'reactstrap';

const TopNav = () => {
	return (
		<div>
			<TNav>
				<Logo src="../logo.svg" />
				<Button color="danger" active>
					Login
				</Button>
			</TNav>
		</div>
	);
};

export default TopNav;
