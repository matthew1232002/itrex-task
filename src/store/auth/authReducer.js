import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authActions from './authActions';

const user = createReducer({}, {
  [authActions.getUserProfileSuccess]: (_, { payload }) => ({
    ...payload,
  }),
});

const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.access_token,
});

const error = createReducer(null, {
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.getUserProfileError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.loginSuccess]: () => true,
  [authActions.loginError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
