import { combineReducers } from 'redux';

import carReducer from './carReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  appReducer,
  carReducer,
});

export default rootReducer;
