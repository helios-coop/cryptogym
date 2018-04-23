import React from 'react';
import { ContentContainer } from '../styles.js';

const TextContent = props => {
  return (
    <ContentContainer>
      <p>{props.text}</p>
    </ContentContainer>
  );
};

export default TextContent;
