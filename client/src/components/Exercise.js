import React, { Component } from 'react';
import axios from 'axios';
import { Progress } from 'react-sweet-progress';
import TextContent from './TextContent.js';
import Editor from './Editor.js';
import BottomNav from './BottomNav.js';
import Console from './Console.js';

import { ExerciseContainer } from '../styles/styles.js';
import 'react-sweet-progress/lib/style.css';

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
    console: [],
    percent: 0
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
          this.setState({
            percent: this.state.percent - 34 > 0 ? this.state.percent - 34 : 0
          });
        })
        .catch(error => {
          console.log(`There was an error getting content: ${error}`);
        });
  };

  next = () => {
    // check local storage
    if (true) {
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
          this.setState({
            percent: this.state.percent + 34 < 100 ? this.state.percent + 34 : 100
          });
        })
        .catch(error => {
          console.log(`There was an error getting content: ${error}`);
        });
    }
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
        <div className="d-flex justify-content-center">
          <Progress
            className=" mb-3 w-75"
            percent={this.state.percent}
            theme={{
              success: {
                symbol: '💪',
                color: 'green'
              },
              active: {
                symbol: '🏋️',
                color: '#ffb256',
                trailColor: '#4180ed'
              },
              default: {
                symbol: '😬',
                trailColor: '#4180ed'
              }
            }}
          />
        </div>

        <ExerciseContainer>
          <TextContent text={this.state.currentContent.text} />
          <Editor
            test={this.state.currentContent.test}
            defaultCode={this.state.currentContent.placeholder}
            setConsole={this.setConsole}
            handleReset={this.handleReset}
            ex={this.props.match.params.ex}
            set={this.props.match.params.set}
            rep={this.props.match.params.rep}
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
