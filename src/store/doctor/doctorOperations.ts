import axios from 'axios';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';
export function getToken() {
  const localAuth = localStorage.getItem('persist:auth') || '{}';
  const jsonAuth = JSON.parse(localAuth);
  axios.defaults.headers.common.Authorization = jsonAuth.token.replace(/"/g, '');
}

getToken();

export const getPatients = () => axios.get('/api/appointments/doctor/me', {
  params: {
    offset: 0,
    limit: 100,
  },
}).then((response) => response.data.appointments);
