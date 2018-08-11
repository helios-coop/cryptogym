import React, { Component } from 'react';

import { ConsoleContainer } from '../styles/styles.js';

class Console extends Component {
  render() {
    return (
      <ConsoleContainer>
        <div id="mocha" className="mx-2" />
        {/* {this.props.message[0] ? <div style={{color: '#c00', fontWeight: 'bold', fontSize: '30px'}}>Syntax Error:</div> : null } */}
        <div style={{paddingTop: '34px'}}>
        {this.props.message[0] ?
        this.props.message[0].map( (m, index) => {
          return (
            <p key={index} style={{color: '#c00', paddingLeft: '52px',}}>{m}</p>
          )
        }) 
        : null}
        </div>
      </ConsoleContainer>
    );
  }
}

export default Console;
