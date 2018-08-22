/**
* Account actions
*/

import * as types from './types.js';

export function login() {
  return { type: types.LOGIN_SUCCESS }
}

export function loginFailed(err) {
  return { type: types.LOGIN_FAILURE, err }
}

export function getUserData(data) {
  return { type: types.USER_DATA_SUCCESS, data }
}
