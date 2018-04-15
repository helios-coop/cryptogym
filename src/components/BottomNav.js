import React from 'react';
import { BNav } from '../styles.js';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const BottomNav = props => {
	return (
		<BNav>
			<Link to={`${props.match.url}/1/chapter/1`}>
				<Button color="danger" active>
					Back
				</Button>
			</Link>
			<Link to={`${props.match.url}/1/chapter/1`}>
				<Button color="success" active>
					Next
				</Button>
			</Link>
		</BNav>
	);
};

export default BottomNav;
