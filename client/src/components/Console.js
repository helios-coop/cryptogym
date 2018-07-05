import React, { Component } from 'react';

import { ConsoleContainer } from '../styles/styles.js';

class Console extends Component {
  render() {
    return (
      <ConsoleContainer>
        <div id="mocha" className="mx-2" />
        <p className="text-danger ml-4">{this.props.message}</p>
      </ConsoleContainer>
    );
  }
}

export default Console;
