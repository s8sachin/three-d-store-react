import { combineReducers } from 'redux';
import tdObjReducer from './tdObjReducer';
import userReducer from './userReducer';

export default combineReducers({
  tdObjReducer,
  userReducer,
});
