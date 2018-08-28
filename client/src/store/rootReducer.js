import { combineReducers } from 'redux';
import progress from './progress/reducer.js';

export const rootReducer = combineReducers({
  progress
});
