import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import { ContentContainer } from '../styles/styles.js';

export default class TextContent extends Component {
  render() {
    return (
      <ContentContainer>
        <ReactMarkdown source={this.props.text} escapeHtml={false}/>
      </ContentContainer>
    );
  }
}