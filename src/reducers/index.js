import { combineReducers } from 'redux';
import auth from './auth';
import stackoverflow from './stackoverflow';

export default combineReducers({
  auth,
  stackoverflow
});
