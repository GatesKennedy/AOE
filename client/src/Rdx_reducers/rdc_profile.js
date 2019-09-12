import {
  PROFILE_GET,
  PROFILE_ERROR,
  PROFILE_CLEAR,
  PROFILE_UPDATE,
  REPOS_GET
} from '../Rdx_actions/axn_types';

const initialState = {
  profile: null,
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_GET:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_UPDATE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case PROFILE_CLEAR:
      return {
        ...state,
        profile: null,
        loading: false
      };
    case REPOS_GET:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    default:
      return state;
  }
}
