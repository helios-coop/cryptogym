import React, { Component } from 'react';
import axios from 'axios';
import { GITHUB_OAUTH_URL } from '../config/private.config.js';

class Login extends Component {

  authenticate = params => {
    const code_param = params.match(/(code=)[^&]+/g)[0];
    const code = code_param.split("=")[1];
    axios.get('http://localhost:5000/auth/callback', { params: {code} })
      .then(res => {
        // TODO: send user to their dashboard OR drop them where they left off
        console.log("Logged in with email:", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.props.location.pathname == "/login/callback") {
      this.authenticate(this.props.location.search);
    }
    return (
      <div>
        <a href={GITHUB_OAUTH_URL}>Login with github</a>
      </div>
    );
  }
}

export default Login;
