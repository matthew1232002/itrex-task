import axios from 'axios';

import * as tokenRepository from '../store/tokenRepository';

export const api = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
});

api.interceptors.request.use(async (config) => {
  /* eslint no-param-reassign: "error" */
  config.headers = {
    Authorization: `Bearer ${tokenRepository.getToken()}`,
    'Access-Control-Allow-Origin': '*',
    accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return config;
});
