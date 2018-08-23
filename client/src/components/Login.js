import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GITHUB_OAUTH_URL } from '../config/private.config.js';
import { loginGithub } from '../store/account';

import '../styles/Login.css';

class Login extends Component {

  authenticate = params => {
    const code_param = params.match(/(code=)[^&]+/g)[0];
    const code = code_param.split("=")[1];
    this.props.loginGithub(code);
  }

  render() {
    // if this.props.loggedIn redirect to dashboard
    if (this.props.location.pathname == "/login/callback") {
      this.authenticate(this.props.location.search);
    }
    return (
      <div>
        <a href={GITHUB_OAUTH_URL}>Login with github</a>
        <p>Login email: {this.props.account.email}</p>
      </div>
    );
  }
}

export default connect(({account})=>({account}), {loginGithub})(Login);
