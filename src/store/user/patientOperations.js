import axios from 'axios';
import patientActions from './patientAction';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';
export function getToken() {
  const localAuth = localStorage.getItem('persist:auth');
  const jsonAuth = JSON.parse(localAuth);
  axios.defaults.headers.common.Authorization = jsonAuth.token.replace(/"/g, '');
}

getToken();

export const getAllSpecializations = () => axios.get('/api/specializations');

export const getDoctorsBySpecializations = (specializationId) => axios.get(`/api/doctors/specialization/${specializationId}`);

export const getAvailableTime = (doctorId, date) => axios.get('/api/appointments/time/free', {
  params: {
    doctorId,
    date,
  },
});

export const getAppointments = (offset, limit) => axios.get('/api/appointments/patient/me', {
  params: {
    offset,
    limit,
  },
});

export const addAppointment = (values) => async (dispatch) => {
  dispatch(patientActions.createAppointmentRequest());

  try {
    const { data } = await axios.post('/api/appointments', values);
    dispatch(patientActions.createAppointmentSuccess(data));
  } catch (error) {
    dispatch(patientActions.createAppointmentError(error.message));
  }
};

export const changeIsAddedState = () => (dispatch) => {
  dispatch(patientActions.changeIsAdded());
};
