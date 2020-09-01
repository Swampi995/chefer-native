import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  appReducer,
  searchReducer,
});

export default rootReducer;
