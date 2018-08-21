/**
* Progress reducers
*/

import { initialState } from './index.js';
import * as types from './types.js';

export default function progressReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_PROGRESS_SUCCESS:
      return { ...state, currentExercise: action.exerciseNumber };
    case types.UPDATE_PROGRESS_FAILURE:
      return { ...state, error: action.err };
    default:
      return state;
  }
}
