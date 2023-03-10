import * as types from '../../constants/user';
import { ActionType } from '../../types';

type State = {
  loading: boolean,
  error: null | { message: string },
}
const initialState = {
  loading: false,
  error: null,
}

const registerReducer = (state: State = initialState, action: ActionType): State => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.USER_REGISTER_SUCCESS:
      return { error: null, loading: false };
    case types.USER_REGISTER_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  };
}

export default registerReducer;