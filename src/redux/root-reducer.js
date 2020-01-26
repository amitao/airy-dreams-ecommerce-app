// base reducer for all of state
import { combineReducers } from 'index';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
})
