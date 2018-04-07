import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class CourseHome extends Component {
  state = {
    introData: []
  };

  getIntroData = () => {
    axios
      .get('http://localhost:5000/intro-data')
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting data: ${error}`);
      });
  };

  componentDidMount = () => {
    this.getIntroData;
  };

  render() {
    return <div>Test!</div>;
  }
}
