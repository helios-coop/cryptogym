import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CourseHomeContainer, WeightContainer } from '../styles/styles.js';
import Footer from './Footer';
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
        <h2
          className="display-10 text-center mt-5 mb-5 quantico"
          style={{ color: '#79A7EA' }}
        >
          Choose Your Exercise!
        </h2>
        <WeightContainer id="weightContainer" className="mb-5">
          {this.state.exercises.map((exerciseName, index) => {
            return (
              <Link
                to={`/l${this.props.match.url}/ex/${index + 1}/set/1/rep/1`}
                style={{ textDecoration: 'none' }}
              >
                {/* <Card body outline color="warning" className="my-3" key={index}>
                <CardTitle className="text-center text-dark h4">
                  {exerciseName}
                </CardTitle>
              </Card> */}
                <svg
                  id="myShape"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgb(11, 11, 11)" />
                      <stop offset="100%" stopColor="rgb(44, 44, 44)" />
                    </linearGradient>
                    <path
                      id="path1"
                      fill="none"
                      stroke="black"
                      stroke-width="1"
                      d="M58,142c0-38.395,32-70,70-70s70,32,70,70"
                    />
                  </defs>
                  <circle
                    cx="125"
                    cy="130"
                    r="110"
                    fill="url(#grad1)"
                    stroke="rgb(44, 44, 44)"
                    stroke-width="12"
                  />
                  <circle
                    cx="125"
                    cy="130"
                    r="24"
                    stroke="url(#grad1)"
                    stroke-width="10"
                    fill="rgb(44, 44, 44)"
                  />
                  <circle cx="125" cy="130" r="14" fill="#29323c" />
                  <text
                    id="myText"
                    fill="white"
                    font-family="Helvetica"
                    font-size="18px"
                    text-anchor="middle"
                    font-weight="bold"
                  >
                    <textPath startOffset="50%" xlinkHref="#path1">
                      <tspan>{exerciseName}</tspan>
                    </textPath>
                  </text>
                  <text x="36" y="136" fill="white" font-weight="bold">
                    20.5
                  </text>
                  <text x="48" y="156" fill="white" font-weight="bold">
                    KG
                  </text>
                  <text x="170" y="136" fill="white" font-weight="bold">
                    {index > 1 ? index * 10 + 5 : index * 5 + 5}
                  </text>
                  <text x="171" y="156" fill="white" font-weight="bold">
                    LB
                  </text>
                </svg>
              </Link>
            );
          })}
        </WeightContainer>
        <Footer />
      </CourseHomeContainer>
    );
  }
}
