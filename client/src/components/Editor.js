import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completed } from '../store/progress';
import { EditorContainer, EditorNav } from '../styles/styles.js';
import AceEditor from 'react-ace';
import { Button } from 'reactstrap';
import '../styles/mocha.css';

import 'brace/mode/javascript';
import 'brace/theme/cobalt';

class Editor extends Component {
  state = {
    default: ''
  };

  componentDidMount() {
    console.log("Current progress:", this.props.progress);
    console.log("Current exercise:", this.props.ex);
  }

  componentDidUpdate() {
    this.refs.aceEditor.editor.session.setValue(this.props.defaultCode);
  }

  handleSubmit = () => {
    if (window.mocha.suite.suites[0]) {
      window.mocha.suite.suites.shift();
      let testSpecs = document.getElementById('mocha-report');
      if (testSpecs) testSpecs.remove();
    }

    if (this.refs.aceEditor.editor.session.$annotations.length === 0) {
      const crypto = require('crypto');
      const currentClass = /\sBlock\s/.test(this.props.defaultCode) ? "Block" : 'Blockchain';
      const userCode = eval(this.refs.aceEditor.editor.session.getValue() + `module.exports = {
        ${currentClass}
      };`);
      eval(this.props.test);

      window.mocha.reporter('html').run((failures) => {
        if (failures === 0){
          this.props.completed(this.props.ex);
          console.log('pass!');
          // play success animation
          // unlock next lesson in local storage
          // let currentProgress = window.localStorage.getItem('progress');
          // window.localStorage.setItem('progress', `{${currentProgress ? currentProgress++ : 0}}`);
        }
        else {
          console.log('fail')
          // shake animation
        }
      });

      this.props.setConsole([], this.refs.aceEditor.editor.session.getValue());
    } else {
      let errorStrings = [];
      for (let i = 0; i < this.refs.aceEditor.editor.session.$annotations.length; i++) {
        errorStrings.push(this.refs.aceEditor.editor.session.$annotations[i].text)
      }
      this.props.setConsole(errorStrings, this.refs.aceEditor.editor.session.getValue());
    }
  };

  render() {
    return (
      <EditorContainer>
        <AceEditor
          ref="aceEditor"
          mode="javascript"
          theme="cobalt"
          name="Editor"
          width="100%"
          height="100%"
          fontSize="16px"
          wrapEnabled={true}
          $blockScrolling = {Infinity}
          editorProps={{ $blockScrolling: true }}
        />
        <EditorNav>
          <Button
            className="px-4"
            color="light"
            onClick={this.handleSubmit}
            active
          >
            Lift
          </Button>
          <Button
            className="px-3"
            color="light"
            onClick={this.props.handleReset}
            active
          >
            Reset
          </Button>
        </EditorNav>
      </EditorContainer>
    );
  }
}

export default connect(({progress})=>({progress}), {completed})(Editor);
