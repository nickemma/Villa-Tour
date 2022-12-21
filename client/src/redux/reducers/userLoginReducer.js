import * as types from '../constants/userConstants';

const userLoginReducer = (
  state = {
    loading: false,
    userInfo: null,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case types.USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userLoginReducer;
