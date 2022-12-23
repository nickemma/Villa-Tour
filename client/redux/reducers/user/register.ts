import * as types from '../../constants/user';
import { ActionType } from '../../types';

type State = {
  loading: boolean,
  error: null | {},
  user: null | {}
}
const initialState = {
  loading: false,
  error: null,
  user: null
}

const registerReducer = (state: State = initialState, action: ActionType): State => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.USER_REGISTER_SUCCESS:
      return { ...state, loading: false, user: payload };
    case types.USER_REGISTER_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  };
}

export default registerReducer;