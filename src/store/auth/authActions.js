import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const getUserProfileRequest = createAction('auth/getUserProfileRequest');
const getUserProfileSuccess = createAction('auth/getUserProfileSuccess');
const getUserProfileError = createAction('auth/getUserProfileError');

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
