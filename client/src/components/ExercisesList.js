import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Card, CardTitle } from 'reactstrap';
import { CourseHomeContainer } from '../styles/styles.js';
import '../styles/ExerciseList.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class ExercisesList extends Component {
  state = {
    exercises: []
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
        <h2 className="display-10 text-center mt-5 mb-5">
          Choose Your Exercise!
        </h2>
        {this.state.exercises.map((exerciseName, index) => {
          return (
            <Link
              to={`/l${this.props.match.url}/ex/${index + 1}/set/1/rep/1`}
              style={{ textDecoration: 'none' }}
            >
              <Card body outline color="warning" className="my-3" key={index}>
                <CardTitle className="text-center text-dark h4">
                  {exerciseName}
                </CardTitle>
              </Card>
            </Link>
          );
        })}
      </CourseHomeContainer>
    );
  }
}
