import {
  PROFILE_GET,
  PROFILE_ERROR,
  PROFILE_CLEAR
} from '../Rdx_actions/axn_types';

const initialState = {
  profile: null,
  they: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_GET:
      console.log('rdc_profile: PROFILE_GET');
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
      console.log('rdc_profile: PROFILE_ERROR');
      return {
        ...state,
        error: payload,
        loading: false
      };
    case PROFILE_CLEAR:
      console.log('rdc_profile: PROFILE_CLEAR');
      return {
        ...state,
        profile: null,
        loading: false
      };
    default:
      console.log('rdc_profile: switch>default');
      return state;
  }
}
