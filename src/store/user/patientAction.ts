import { createAction } from '@reduxjs/toolkit';

const createAppointmentRequest = createAction('user/createAppointmentRequest');
const createAppointmentSuccess = createAction('user/createAppointmentSuccess', (date) => ({
  payload: date,
}));
const createAppointmentError = createAction('user/createAppointmentError', (date) => ({
  payload: date,
}));

const getResolutionsPatientRequest = createAction('user/getResolutionsPatientRequest');
const getResolutionsPatientSuccess = createAction('user/getResolutionsPatientSuccess', (date) => ({
  payload: date,
}));
const getResolutionsPatientError = createAction('user/getResolutionsPatientError', (date) => ({
  payload: date,
}));

const getAppointmentsRequest = createAction('user/getAppointmentsRequest');
const getAppointmentsSuccess = createAction('user/getAppointmentsSuccess', (date) => ({
  payload: date,
}));
const getAppointmentsError = createAction('user/getAppointmentsError', (date) => ({
  payload: date,
}));

export default {
  createAppointmentRequest,
  createAppointmentSuccess,
  createAppointmentError,
  getResolutionsPatientRequest,
  getResolutionsPatientSuccess,
  getResolutionsPatientError,
  getAppointmentsRequest,
  getAppointmentsSuccess,
  getAppointmentsError,
};
