import axios from 'axios';
import patientActions from './patientAction';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';

const localAuth = localStorage.getItem('persist:auth');
const jsonAuth = JSON.parse(localAuth);
axios.defaults.headers.common.Authorization = jsonAuth.token.replace(/"/g, '');


export const getAllSpecializations = () => axios.get('/api/specializations').then((response) => response.data.map((item) => (
  {
    value: item.id,
    label: item.specialization_name,
  }
)));

export const getDoctorsBySpecializations = (specializationId) => axios.get(`/api/doctors/specialization/${specializationId}`)
  .then((response) => response.data.map((item) => ({
    value: item.id,
    label: `${item.first_name} ${item.last_name}`,
  })));

export const getAvailableTime = (doctorId, date) => axios.get('/api/appointments/time/free', {
  params: {
    doctorId,
    date,
  },
});

export const getAppointments = () => axios.get('/api/appointments/patient/me', {
  params: {
    offset: 0,
    limit: 100,
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
