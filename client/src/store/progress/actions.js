/**
* Progress actions
*/

import * as types from './types.js';

export function updateProgress(exerciseNumber) {
  return { type: types.UPDATE_PROGRESS_SUCCESS, exerciseNumber }
}

export function updateProgressFailed(err) {
  return { type: types.UPDATE_PROGRESS_FAILURE, err }
}
