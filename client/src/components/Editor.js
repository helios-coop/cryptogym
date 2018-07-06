import React, { Component } from 'react';
import { EditorContainer, EditorNav } from '../styles/styles.js';
import AceEditor from 'react-ace';
import { Button } from 'reactstrap';
import '../styles/mocha.css';

import 'brace/mode/javascript';
import 'brace/theme/cobalt';

export default class Editor extends Component {
  state = {
    error: ''
  };

  componentDidUpdate() {
    this.refs.aceEditor.editor.session.setValue(this.props.defaultCode);
  }

  handleReset = () => {
    let testSpecs = document.getElementById('mocha-report');
    if (testSpecs) testSpecs.remove();
    this.refs.aceEditor.editor.session.setValue(this.props.defaultCode);
  };

  handleSubmit = () => {
    if (window.mocha.suite.suites[0]) {
      window.mocha.suite.suites.shift();
      let testSpecs = document.getElementById('mocha-report');
      if (testSpecs) testSpecs.remove();
    }

    // Abstract away module export

    if (this.refs.aceEditor.editor.session.$annotations.length === 0) {
      const crypto = require('crypto');
      const userCode = eval(this.refs.aceEditor.editor.session.getValue());
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
    } else console.log(this.refs.aceEditor.editor.session.$annotations);
    this.props.setConsole('error');
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
          editorProps={{ $blockScrolling: true }}
        />
        <EditorNav>
        <Button color="light" onClick={this.handleSubmit} style={{ margin: '0 3%'}}active>
        Lift{' '}
        <span role="img" aria-label="arm flex">
          &#128170;
        </span>
        </Button>
        <Button color="light" onClick={this.handleReset} style={{ margin: '0 3%'}} active>
          Reset{' '}
          <span role="img" aria-label="recycle emoji">
          &#9850;
          </span>
        </Button>
        </EditorNav>
      </EditorContainer>
    );
  }
}
