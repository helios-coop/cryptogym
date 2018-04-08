import React, { Component } from 'react';
import EditorBox from './EditorBox.js';
import { EditorContainer } from '../styles.js';

export default class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 1,
		};
		this.updateState = this.updateState.bind(this);
	}

	updateState = newText => {
		console.log(this);
		console.log(newText);
		console.log(this.state.text);
	};

	handleSubmit = newValue => {
		let newV = this.state.text;
		newV++;
		this.setState({ text: newV });
		console.log(this.state.text);
	};

	render() {
		return (
			<EditorContainer>
				<EditorBox updateState={this.updateState} />
				<div onClick={this.handleSubmit}>DIE</div>
			</EditorContainer>
		);
	}
}
