import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { CourseHomeContainer } from '../styles.js';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class CourseHome extends Component {
  state = {
    introText: []
  };

  getIntroData = () => {
    axios
      .get('http://localhost:5000/intro-text')
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting text: ${error}`);
      });
  };

  componentDidMount = () => {
    this.getIntroText;
  };

  render() {
    return (
      <CourseHomeContainer>
        <h2 className="display-4 text-center mt-5">Welcome to the Lesson!</h2>
        <p className="lead mt-4 text-center">
          In this lesson you will start by learning about blockchain technology
          and the three protocols that make up a blockchain. Excited? Let's get
          started!
        </p>
        <div className="d-flex justify-content-center mt-5">
          <Link to={`${this.props.match.url}/1/chapter/1`}>
            <Button color="danger" size="lg" active>
              Start
            </Button>{' '}
          </Link>
        </div>
      </CourseHomeContainer>
    );
  }
}
