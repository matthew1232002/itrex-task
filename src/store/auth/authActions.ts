import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess', (payload) => ({
  payload,
}));
const registerError = createAction('auth/registerError', (payload) => ({
  payload,
}));

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess', (payload) => ({
  payload,
}));
const loginError = createAction('auth/loginError', (payload) => ({
  payload,
}));

const getUserProfileRequest = createAction('auth/getUserProfileRequest');
const getUserProfileSuccess = createAction('auth/getUserProfileSuccess', (payload) => ({
  payload,
}));
const getUserProfileError = createAction('auth/getUserProfileError', (payload) => ({
  payload,
}));

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileError,
};
