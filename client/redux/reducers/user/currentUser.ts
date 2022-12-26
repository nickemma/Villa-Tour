import * as types from '../../constants/user';
import { ActionType } from '../../types';

type State = {
  user: null | {}
}
const initialState = {
  user: null
}

const currentUserReducer = (state: State = initialState, action: ActionType): State => {
  const { type, payload } =  action;
  switch (type) {
    case types.USER_LOGIN_SUCCESS:
      return { user: payload };
    case types.USER_REGISTER_SUCCESS:
      return { user: payload };
    case types.USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default currentUserReducer;