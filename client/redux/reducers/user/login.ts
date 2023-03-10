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

const loginReducer = (state: State = initialState, action: ActionType): State => {
  const { type, payload } =  action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.USER_LOGIN_SUCCESS:
      return { error: null, loading: false };
    case types.USER_LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };
    case types.USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default loginReducer;