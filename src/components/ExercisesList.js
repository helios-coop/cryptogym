import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { CourseHomeContainer } from '../styles.js';
import 'bootstrap/dist/css/bootstrap.css';

export default class ExercisesList extends Component {
  state = {
    exercises: [],
  };

  getIntroText = () => {
    const path = this.props.match.path === '/javascript' ? 0 : 1;
    axios
      .get(`http://localhost:5000/exercises/${path}`)
      .then(response => {
        this.setState({ exercises: response.data });
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
        <h2 className="display-10 text-center mt-5">Pick your exercises!</h2>
        {this.state.exercises.map((exerciseName, index) => {
          return (
            <div key={index}>
              <Link
                to={`/l${this.props.match.url}/ex/${index + 1}/set/1/rep/1`}
              >
                <p className="lead mt-4 text-center">{exerciseName}</p>
              </Link>
            </div>
          );
        })}
      </CourseHomeContainer>
    );
  }
}
