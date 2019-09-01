import { OPEN_GET, OPEN_ERROR } from '../Rdx_actions/axn_types';

const initialState = {
  apps: null,
  they: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OPEN_GET:
      return {
        ...state,
        apps: payload,
        loading: false
      };
    case OPEN_ERROR:
      return {
        ...state,
        errpr: payload,
        loading: false
      };

    default:
      return state;
  }
}
