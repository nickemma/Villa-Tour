import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './user/login';
import registerReducer from './user/register';
import currentUserReducer from './user/currentUser';
import tourReducer from './tours/tour';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  currentUser: currentUserReducer,
  tourData: tourReducer,
});

export default rootReducer;
