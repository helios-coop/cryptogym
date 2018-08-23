import { combineReducers } from 'redux';
import account from './account/reducer.js';
import progress from './progress/reducer.js';

export const rootReducer = combineReducers({
  account,
  progress
});
