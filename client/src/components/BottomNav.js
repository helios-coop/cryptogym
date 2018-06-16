import React from 'react';
import { BNav, NavButton } from '../styles.js';

const BottomNav = () => {
	return (
		<div>
			<BNav>
				<NavButton>Back</NavButton>
				<NavButton>Next</NavButton>
			</BNav>
		</div>
	);
};

export default BottomNav;
