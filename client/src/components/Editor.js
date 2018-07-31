import React, { Component } from 'react';
import { EditorContainer, EditorNav } from '../styles/styles.js';
import AceEditor from 'react-ace';
import { Button } from 'reactstrap';
import '../styles/mocha.css';

import 'brace/mode/javascript';
import 'brace/theme/cobalt';

export default class Editor extends Component {
  state = {
    default: ''
  };

  componentDidUpdate() {
    this.refs.aceEditor.editor.session.setValue(this.props.defaultCode);
  }

  handleSubmit = () => {
    if (window.mocha.suite.suites[0]) {
      window.mocha.suite.suites.shift();
      let testSpecs = document.getElementById('mocha-report');
      if (testSpecs) testSpecs.remove();
    }

    // Abstract away module export

    if (this.refs.aceEditor.editor.session.$annotations.length === 0) {
      const crypto = require('crypto');
      const currentClass = /\sBlock\s/.test(this.props.defaultCode) ? "Block" : 'Blockchain';
      const userCode = eval(this.refs.aceEditor.editor.session.getValue() + `module.exports = {
        ${currentClass}
      };`);
      eval(this.props.test);

      window.mocha.reporter('html').run(function(failures) {
        if (failures === 0) console.log('pass!');
        // play success animation
        // unlock next lesson
        else {
          // set error message
          // shake animation
        }
      });
    } else {
      let errorString = '';
      for (let i = 0; i < this.refs.aceEditor.editor.session.$annotations.length; i++) {
        errorString += this.refs.aceEditor.editor.session.$annotations[i].text;
        errorString += '\n'
      }
      this.props.setConsole(errorString, this.refs.aceEditor.editor.session.getValue());
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
