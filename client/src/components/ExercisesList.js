import React, { Component } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { CourseHomeContainer, WeightContainer } from '../styles/styles.js';
import Footer from './Footer';
import '../styles/ExerciseList.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class ExercisesList extends Component {
  state = {
    exercises: [],
    loading: true
  };

  getIntroText = () => {
    const path = this.props.match.path === '/javascript' ? 0 : 1;
    axios
      // .get(`https://cryptogym-server.herokuapp.com/exercises/${path}`)
      // TODO: process.env.REACT_APP_API_EXERCISES
      .get(`https://cryptogym.herokuapp.com/exercises/${path}`)
      .then(response => {
        this.setState({ exercises: response.data, loading: false });
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
        <div className="d-flex justify-content-center">
          <BeatLoader color={'white'} loading={this.state.loading} />
        </div>
        <WeightContainer id="weightContainer" className="mb-5">
          {this.state.exercises.map((exerciseName, index) => {
            return (
              <Link
                to={
                  index > 0
                    ? '#'
                    : `/l${this.props.match.url}/ex/${index + 1}/set/1/rep/1`
                }
                style={{ textDecoration: 'none' }}
                key={index}
              >
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
                      strokeWidth="1"
                      d="M58,142c0-38.395,32-70,70-70s70,32,70,70"
                    />
                  </defs>
                  <circle
                    cx="125"
                    cy="130"
                    r="110"
                    fill="url(#grad1)"
                    stroke="rgb(44, 44, 44)"
                    strokeWidth="12"
                  />
                  <circle
                    cx="125"
                    cy="130"
                    r="24"
                    stroke="url(#grad1)"
                    strokeWidth="10"
                    fill="rgb(44, 44, 44)"
                  />
                  <circle cx="125" cy="130" r="14" fill="#151c24" />

                  <text
                    id="myText"
                    fill="white"
                    fontFamily="Helvetica"
                    fontSize="18px"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    <textPath startOffset="50%" xlinkHref="#path1">
                      <tspan>{exerciseName}</tspan>
                    </textPath>
                  </text>
                  <text
                    x={index > 1 ? 40 : 44}
                    y="136"
                    fill="white"
                    fontWeight="bold"
                  >
                    {(
                      (index > 1 ? index * 10 + 5 : index * 5 + 5) / 2.2
                    ).toFixed(1)}
                  </text>
                  <text x="48" y="156" fill="white" fontWeight="bold">
                    KG
                  </text>
                  <text
                    x={index > 0 ? 170 : 176}
                    y="136"
                    fill="white"
                    fontWeight="bold"
                  >
                    {index > 1 ? index * 10 + 5 : index * 5 + 5}
                  </text>
                  <text x="171" y="156" fill="white" fontWeight="bold">
                    LB
                  </text>
                  {index > 0 ? (
                    <text
                      className="comingsoon"
                      x="26"
                      y="200"
                      fill="#ffb256"
                      fontWeight="bold"
                      fontSize="28px"
                      fontFamily="Quantico"
                    >
                      COMING SOON
                    </text>
                  ) : null}
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
