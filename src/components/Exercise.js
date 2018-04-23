import React, { Component } from 'react';
import axios from 'axios';
import { ExerciseContainer } from '../styles.js';
import TextContent from './TextContent.js';
import Editor from './Editor.js';
import BottomNav from './BottomNav.js';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Exercise extends Component {
  state = {
    currentContent: {
      id: '',
      text: '',
      code: '',
      prevUrl: '',
      nextUrl: '',
    },
  };

  previous = () => {
    if (this.state.currentContent.prevUrl === '/javascript')
      this.props.history.push('/javascript');
    else if (this.state.currentContent.prevUrl === '/python')
      this.props.history.push('/python');
    else
      axios
        .get(`http://localhost:5000${this.state.currentContent.prevUrl}`)
        .then(response => {
          this.props.history.push(this.state.currentContent.prevUrl);
          this.setState({ currentContent: response.data });
        })
        .catch(error => {
          console.log(`There was an error getting content: ${error}`);
        });
  };

  next = () => {
    axios
      .get(`http://localhost:5000${this.state.currentContent.nextUrl}`)
      .then(response => {
        this.props.history.push(this.state.currentContent.nextUrl);
        this.setState({ currentContent: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting content: ${error}`);
      });
  };

  render() {
    return (
      <div>
        <ExerciseContainer>
          <TextContent text={this.state.currentContent.text} />
          <Editor code={this.state.currentContent.code} defaultCode={''} />
        </ExerciseContainer>
        <BottomNav prev={this.previous} next={this.next} />
      </div>
    );
  }

  componentDidMount() {
    const { language, ex, set, rep } = this.props.match.params;
    axios
      .get(`http://localhost:5000/l/${language}/ex/${ex}/set/${set}/rep/${rep}`)
      .then(response => {
        this.setState({ currentContent: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting content: ${error}`);
      });
  }
}

export default Exercise;
