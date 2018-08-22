/**
* Account
*/

import axios from 'axios';
import * as actions from './actions.js';
import { API_URL } from '../../config/config.js';

const error = err => {console.error(err)};

export const initialState = {
  error: "",
  id: "",
  email: "",
  progress: ""
};

export function loginGithub(code) {
  return dispatch => {
    axios.get('http://localhost:5000/auth/callback', { params: {code} })
      .then(res => {
        // TODO: get user from db
        dispatch(actions.getUserData(res.data));
        dispatch(actions.login());
      })
      .catch(err => {
        error(err);
        dispatch(actions.loginFailed(JSON.stringify(err)));
      });
  }
};
