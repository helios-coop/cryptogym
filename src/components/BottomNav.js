import React from 'react';
import { BNav, NavButton } from '../styles.js';
import { Button } from 'reactstrap';

const BottomNav = () => {
	return (
		<div>
			<BNav>
				<Button color="danger" size="lg" active>
					Back
				</Button>
				<Button color="success" size="lg" active>
					Next
				</Button>
			</BNav>
		</div>
	);
};

export default BottomNav;
