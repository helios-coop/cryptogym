/**
* Progress
*/

import axios from 'axios';
import * as actions from './actions.js';
import { API_URL } from '../../config/config.js';

const error = err => {console.error(err)};

export const initialState = {
  /*
  This placement is awkward, because initialState is not used in this module.
  However, we keep it here (to be accessed by the reducer) to stay aware of how
  the state will change upon dispatching actions.
  */
  currentExercise: [0,0], // exercise number: i0 is the circuit, i1 is the exercise
  error: ""
};

// this is triggered when the user successfully completes an exercise
export function completed(exerciseId) {
  /*
  When the user completes an exercise, update their record in the db and update
  the progress state with the subseqeunt exercise.
  */
  return dispatch => {
    // Server should get the current user from req.cookies when updating the
    // resource. That is why we use withCredentials.
    axios.post(API_URL+'/progress', {
      exerciseId
    }, { withCredentials: true})
      .then(res => {
        // Server should send back the exercise number
        dispatch(actions.updateProgress(res.data));
      })
      .catch((err) => {
        error(err);
        dispatch(actions.updateProgressFailed(JSON.stringify(err))); //
      });
  }
};
