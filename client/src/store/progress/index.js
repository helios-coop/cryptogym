/**
* Progress
*/

import axios from 'axios';
import * as actions from './actions.js';

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
    axios.post(process.env.REACT_APP_SERVER_ACCOUNT+'/progress', {
      exerciseId
    }, { withCredentials: true})
      .then(res => {
        // the server should send back the exercise number
        dispatch(actions.updateProgress(res.data));
      })
      .catch((err) => {
        error(err);
        dispatch(actions.updateProgressFailed(JSON.stringify(err))); //
      });
  }
};
