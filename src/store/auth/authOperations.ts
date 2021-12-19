import { Dispatch } from 'redux';
import authActions from './authActions';
import { LogInType } from '../../components/models/logIn.model';
import { RegisterType } from '../../components/models/register.model';
import { TokensType } from '../../components/models/token.model';
import { ProfileWithDataType } from '../../components/models/profile.model';
import { NotifyError, NotifySuccess } from '../../components/UI/Notify';
import * as tokenRepository from '../tokenRepository';
import { api } from '../../services/api';

const logIn = (credentials: LogInType) => async (dispatch: Dispatch<{ type: string }>) => {
  dispatch(authActions.loginRequest());
  dispatch(authActions.getUserProfileRequest());

  try {
    const { data } = await api.post<TokensType>('auth/login', credentials);

    // token.set(data.access_token);
    tokenRepository.setToken(data.access_token);

    dispatch(authActions.loginSuccess(data.access_token));

    const response = await api.get<ProfileWithDataType>('auth/profile');

    dispatch(authActions.getUserProfileSuccess(response.data));
    NotifySuccess('Logged in successfully!');
  } catch (error) {
    NotifyError('Something went wrong!');
    dispatch(authActions.loginError((error as Error).message));
    dispatch(authActions.getUserProfileError((error as Error).message));
  }
};

const register = (credentials: RegisterType) => async (dispatch: Dispatch<{ type: string }>) => {
  dispatch(authActions.registerRequest());
  dispatch(authActions.getUserProfileRequest());

  try {
    const { data } = await api.post<TokensType>('auth/registration', credentials);
    // token.set(data.access_token);
    tokenRepository.setToken(data.access_token);
    dispatch(authActions.registerSuccess(data.access_token));

    const response = await api.get<ProfileWithDataType>('auth/profile');
    dispatch(authActions.getUserProfileSuccess(response.data));
    NotifySuccess('Registered successfully!');
  } catch (error) {
    NotifyError('Something went wrong!');
    dispatch(authActions.registerError((error as Error).message));
    dispatch(authActions.getUserProfileError((error as Error).message));
  }
};

export default {
  logIn,
  register,
};
