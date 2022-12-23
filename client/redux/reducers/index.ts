import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./user/login";
import registerReducer from "./user/register";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer
});

export default rootReducer;