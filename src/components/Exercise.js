import React, { Component } from 'react';
import axios from 'axios';
import { ExerciseContainer } from '../styles.js';
import Content from './Content.js';
import Editor from './Editor.js';

class Exercise extends Component {
  state = {
    chapter: []
  };

  render() {
    return (
      <ExerciseContainer>
        <Content />
        <Editor />
      </ExerciseContainer>
    );
  }

  componentDidMount() {
    //axios get by id, Exercise, chapter
  }
}

export default Exercise;
