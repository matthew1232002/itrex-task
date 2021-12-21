import axios from 'axios';
import { Dispatch } from 'redux';
import patientActions from './patientAction';
import { SpecializationsType } from '../../components/models/specializations.model';
import { DoctorsBySpecializationType } from '../../components/models/doctorsBySpecialization.model';
import { AddAppointmentType, AddAppointmentResponseType } from '../../components/models/addAppointment.model';

axios.defaults.baseURL = 'https://reactlabapi.herokuapp.com';
export function getToken() {
  const localAuth = localStorage.getItem('persist:auth') || '{}';
  const jsonAuth = JSON.parse(localAuth);
  axios.defaults.headers.common.Authorization = jsonAuth.token.replace(/"/g, '');
}

getToken();

export const getAllSpecializations = () => axios.get('/api/specializations').then((response) => response.data.map((item: SpecializationsType) => (
  {
    value: item.id,
    label: item.specialization_name,
  }
)));

export const getDoctorsBySpecializations = (specializationId: string) => axios.get(`/api/doctors/specialization/${specializationId}`)
  .then((response) => response.data.map((item: DoctorsBySpecializationType) => ({
    value: item.id,
    label: `${item.first_name} ${item.last_name}`,
  })));

export const getAvailableTime = (doctorId: string, date: string) => axios.get('/api/appointments/time/free', {
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

export const addAppointment = (values: AddAppointmentType) => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(patientActions.createAppointmentRequest());

  try {
    const { data } = await axios.post<AddAppointmentResponseType>('/api/appointments', values);
    dispatch(patientActions.createAppointmentSuccess(data));
  } catch (error) {
    dispatch(patientActions.createAppointmentError((error as Error).message));
  }
};

export const changeIsAddedState = () => (dispatch: Dispatch<{ type: string }>) => {
  dispatch(patientActions.changeIsAdded());
};
