import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { CourseHomeContainer } from '../styles/styles.js';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class CourseHome extends Component {
  state = {
    introText: []
  };

  getIntroText = () => {
    axios
      .get('https://cryptogym-server.herokuapp.com/0/1')
      .then(response => {
        const newState = this.state.introText;
        newState.push(response.data);
        this.setState({ introText: newState });
      })
      .catch(error => {
        console.log(`There was an error getting text: ${error}`);
      });
  };

  componentDidMount = () => {
    this.getIntroText();
  };

  render() {
    return (
      <CourseHomeContainer id="home">
        <h2 className="display-4 text-center mt-5">Welcome to the Lesson!</h2>
        {this.state.introText.map(text => {
          return (
            <p key={Date()} className="lead mt-4 text-center">
              {text}
            </p>
          );
        })}
        <div className="d-flex justify-content-center mt-5">
          <Link to={`${this.props.match.url}/1/set/1/rep/1`}>
            <Button color="danger" size="lg" active>
              Start
            </Button>{' '}
          </Link>
        </div>
      </CourseHomeContainer>
    );
  }
}
