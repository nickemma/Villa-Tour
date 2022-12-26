import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./user/login";
import registerReducer from "./user/register";
import currentUserReducer from "./user/currentUser";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;