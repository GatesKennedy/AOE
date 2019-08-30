import axios from 'axios';
import { setAlert } from './axn_alert';

import { GET_SELF, SELF_ERROR } from './axn_types';

// Get current users profile
export const getCurrentSelf = () => async dispatch => {
  try {
    const res = await axios.get('/api/self/me');

    dispatch({
      type: GET_SELF,
      payload: res.data
    });
  } catch (err) {
    console.log('axn_self.js: catch error');
    dispatch({
      type: SELF_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
