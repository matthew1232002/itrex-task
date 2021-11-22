import { createAction } from '@reduxjs/toolkit';

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const getUserProfileRequest = createAction('auth/getUserProfileRequest');
const getUserProfileSuccess = createAction('auth/getUserProfileSuccess');
const getUserProfileError = createAction('auth/getUserProfileError');

export default {
  loginRequest,
  loginSuccess,
  loginError,
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileError,
};
