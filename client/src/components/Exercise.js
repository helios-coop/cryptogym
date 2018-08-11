import React, { Component } from 'react';
import axios from 'axios';
import TextContent from './TextContent.js';
import Editor from './Editor.js';
import BottomNav from './BottomNav.js';
import Console from './Console.js';

import { ExerciseContainer } from '../styles/styles.js';

class Exercise extends Component {
  state = {
    currentContent: {
      id: '',
      text: '',
      test: '',
      placeholder: '',
      prevUrl: '',
      nextUrl: ''
    },
    console: []
  };

  previous = () => {
    let testSpecs = document.getElementById('mocha-report');
    if (testSpecs) testSpecs.remove();
    if (this.state.currentContent.prevUrl === '/javascript')
      this.props.history.push('/javascript');
    else if (this.state.currentContent.prevUrl === '/python')
      this.props.history.push('/python');
    else
      axios
        // .get(`https://cryptogym-server.herokuapp.com${this.state.currentContent.prevUrl}`)
        .get(
          `https://cryptogym.herokuapp.com${this.state.currentContent.prevUrl}`
        )
        .then(response => {
          this.props.history.push(this.state.currentContent.prevUrl);
          this.setState({ currentContent: response.data });
        })
        .catch(error => {
          console.log(`There was an error getting content: ${error}`);
        });
  };

  next = () => {
    let testSpecs = document.getElementById('mocha-report');
    if (testSpecs) testSpecs.remove();
    axios
      // .get(`https://cryptogym-server.herokuapp.com${this.state.currentContent.nextUrl}`)
      .get(
        `https://cryptogym.herokuapp.com${this.state.currentContent.nextUrl}`
      )
      .then(response => {
        this.props.history.push(this.state.currentContent.nextUrl);
        this.setState({ currentContent: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting content: ${error}`);
      });
  };

  setConsole = (message, code) => {
    this.setState({
      console: [message],
      currentContent: { ...this.state.currentContent, placeholder: code }
    });
  };

  handleReset = () => {
    let testSpecs = document.getElementById('mocha-report');
    if (testSpecs) testSpecs.remove();
    const { language, ex, set, rep } = this.props.match.params;
    axios
      // .get(`https://cryptogym-server.herokuapp.com/l/${language}/ex/${ex}/set/${set}/rep/${rep}`)
      .get(
        `https://cryptogym.herokuapp.com/l/${language}/ex/${ex}/set/${set}/rep/${rep}`
      )
      .then(response => {
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
          <Editor
            test={this.state.currentContent.test}
            defaultCode={this.state.currentContent.placeholder}
            setConsole={this.setConsole}
            handleReset={this.handleReset}
          />
          <Console message={this.state.console} />
        </ExerciseContainer>
        <BottomNav prev={this.previous} next={this.next} />
      </div>
    );
  }

  componentDidMount() {
    const { language, ex, set, rep } = this.props.match.params;
    axios
      // .get(`https://cryptogym-server.herokuapp.com/l/${language}/ex/${ex}/set/${set}/rep/${rep}`)
      .get(
        `https://cryptogym.herokuapp.com/l/${language}/ex/${ex}/set/${set}/rep/${rep}`
      )
      .then(response => {
        this.setState({ currentContent: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting content: ${error}`);
      });
  }
}

export default Exercise;
