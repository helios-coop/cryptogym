import React from 'react';
import { TNav, Logo, NavButton } from '../styles.js';

const TopNav = () => {
	return (
		<div>
			<TNav>
				<Logo src="../logo.svg" />
				<NavButton>Login</NavButton>
			</TNav>
		</div>
	);
};

export default TopNav;
