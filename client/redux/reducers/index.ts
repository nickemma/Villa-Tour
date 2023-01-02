import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './user/login';
import registerReducer from './user/register';
import currentUserReducer from './user/currentUser';
import tourReducer from './tours/tour';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, currentUserReducer);

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  tourData: tourReducer,
  currentUser: persistedReducer,
});

export default rootReducer;
