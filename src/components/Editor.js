import React, { Component } from 'react';
import { EditorContainer } from '../styles.js';
import AceEditor from 'react-ace';
import { Button } from 'reactstrap';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default class Editor extends Component {
  state = {
    requiredCode: '',
  };

  componentDidUpdate() {
    this.refs.aceEditor.editor.session.setValue(this.props.defaultCode);
  }

  handleSubmit = () => {
    if (this.refs.aceEditor.editor.session.getValue() === this.props.code)
      alert('Got it!');
    else alert('NO');
  };

  handleReset = () => {
    this.refs.aceEditor.editor.session.setValue(this.props.defaultCode);
  };

  render() {
    return (
      <EditorContainer>
        <div
          style={{ backgroundColor: '#3E3D32', width: '90%', height: '50px' }}
        />
        <AceEditor
          ref="aceEditor"
          mode="javascript"
          theme="monokai"
          name="Editor"
          width="90%"
          editorProps={{ $blockScrolling: true }}
        />
        <div style={{ backgroundColor: '#3E3D32', width: '90%' }}>
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
