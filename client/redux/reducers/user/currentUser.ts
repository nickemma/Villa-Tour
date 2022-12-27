import * as types from '../../constants/user';
import { ActionType } from '../../types';

interface User {
  name: string;
  email: string;
  password: string;
}
type State = {
  user: null | { user: User, token: string };
};
const initialState = {
  user: null,
};

const currentUserReducer = (
  state: State = initialState,
  action: ActionType
): State => {
  const { type, payload } = action;
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
};

export default currentUserReducer;
