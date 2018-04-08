import React from 'react';
import { BNav, NavButton } from '../styles.js';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const BottomNav = props => {
	console.log(props.match.params.lsn);
	return (
		<div>
			<BNav>
				<Link to={`${props.match.url}/1/chapter/1`}>
					<Button color="danger" size="lg" active>
						Start
					</Button>
				</Link>
				<Link to={`${props.match.url}/1/chapter/1`}>
					<Button color="success" size="lg" active>
						Start
					</Button>
				</Link>
			</BNav>
		</div>
	);
};

export default BottomNav;
