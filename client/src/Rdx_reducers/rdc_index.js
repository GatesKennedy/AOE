import { combineReducers } from 'redux';
import alert from './rdc_alert';
import auth from './rdc_auth';

export default combineReducers({
  alert,
  auth
});
