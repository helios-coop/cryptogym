/**
* Account reducers
*/

import { initialState } from './index.js';
import * as types from './types.js';

export default function progressReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, loggedIn: true };
    case types.LOGIN_FAILURE:
      return { ...state, loggedIn: false, error: action.err };
    case types.USER_DATA_SUCCESS:
      return { ...state, email: action.data };
    default:
      return state;
  }
}
