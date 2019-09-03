import axios from 'axios';
import { setAlert } from './axn_alert';

import { PROFILE_GET, PROFILE_ERROR } from './axn_types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: PROFILE_GET,
      payload: res.data
    });
  } catch (err) {
    console.log('axn_profile.js: catch error');

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
