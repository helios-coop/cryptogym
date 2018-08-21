import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer.js';
import thunk from 'redux-thunk';
// development only
// |
// v
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant()
    )
  );
}
