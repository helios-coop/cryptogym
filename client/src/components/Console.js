import React, { Component } from 'react';

import { ConsoleContainer } from '../styles/styles.js';

class Console extends Component {
  render() {
    return (
      <ConsoleContainer>
        <div id="mocha" className="mx-5 px-5" />
      </ConsoleContainer>
    );
  }
}

export default Console;
