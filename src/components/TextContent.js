import React, { Component } from 'react';
import { Markdown } from 'react-showdown';

import { ContentContainer } from '../styles.js';

export default class TextContent extends Component {
  render() {
    return (
      <ContentContainer>
        <Markdown markup={this.props.text} />
      </ContentContainer>
    );
  }
}
