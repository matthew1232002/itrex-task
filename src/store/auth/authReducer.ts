import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authActions from './authActions';
import { ProfileType } from '../../components/models/profile.model';

const user = createReducer<ProfileType>({} as ProfileType, {
  [authActions.getUserProfileSuccess.type]: (
    _: ProfileType,
    { payload }: PayloadAction<ProfileType>,
  ) => ({
    ...payload,
  }),
});

const token = createReducer<string>('', {
  [authActions.registerSuccess.type]: (_:string, { payload }: PayloadAction<string>) => payload,
  [authActions.loginSuccess.type]: (_:string, { payload }: PayloadAction<string>) => payload,
});

const error = createReducer<string>('', {
  [authActions.registerError.type]: (_: string, { payload }: PayloadAction<string>) => payload,
  [authActions.loginError.type]: (_: string, { payload }: PayloadAction<string>) => payload,
  [authActions.getUserProfileError.type]: (
    _: string,
    { payload }: PayloadAction<string>,
  ) => payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess.type]: () => true,
  [authActions.loginSuccess.type]: () => true,
  [authActions.registerError.type]: () => false,
  [authActions.loginError.type]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
