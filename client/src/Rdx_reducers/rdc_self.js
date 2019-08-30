import { GET_SELF, SELF_ERROR } from '../Rdx_actions/axn_types';

const initialState = {
  self: null,
  they: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SELF:
      return {
        ...state,
        self: payload,
        loading: false
      };
    case SELF_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
