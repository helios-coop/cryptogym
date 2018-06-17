import React, { Component } from 'react';
import { EditorContainer } from '../styles/styles.js';
import AceEditor from 'react-ace';
import { Button } from 'reactstrap';
import '../styles/mocha.css';

import 'brace/mode/javascript';
import 'brace/theme/cobalt';

export default class Editor extends Component {
  state = {
    requiredCode: `class Block {
    
    }
    
    module.exports = {
      Block
    };`
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

    const crypto = require('crypto');
    const userCode = eval(this.refs.aceEditor.editor.session.getValue());
    eval(this.props.code);
    window.mocha.run();
  };

  handleReset = () => {
    let testSpecs = document.getElementById('mocha-report');
    if (testSpecs) testSpecs.remove();
    this.refs.aceEditor.editor.session.setValue(this.props.defaultCode);
  };

  render() {
    return (
      <EditorContainer>
        <AceEditor
          ref="aceEditor"
          mode="javascript"
          theme="cobalt"
          name="Editor"
          width="115%"
          height="100%"
          fontSize="16px"
          editorProps={{ $blockScrolling: true }}
        />
        <div
          style={{
            backgroundColor: 'black',
            width: '115%'
          }}
          className="d-flex justify-content-around"
        >
          <Button color="light" onClick={this.handleSubmit} active>
            Lift{' '}
            <span role="img" aria-label="arm flex">
              &#128170;
            </span>
          </Button>
          <Button color="light" onClick={this.handleReset} active>
            Reset{' '}
            <span role="img" aria-label="recycle emoji">
              &#x267B;
            </span>
          </Button>
        </div>
      </EditorContainer>
    );
  }
}
