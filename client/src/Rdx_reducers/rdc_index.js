import { combineReducers } from 'redux';
import alert from './rdc_alert';
import auth from './rdc_auth';
import self from './rdc_self';

export default combineReducers({
  alert,
  auth,
  self
});
