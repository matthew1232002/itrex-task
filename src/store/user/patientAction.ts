import { createAction } from '@reduxjs/toolkit';

const createAppointmentRequest = createAction('user/createAppointmentRequest');
const createAppointmentSuccess = createAction('user/createAppointmentSuccess', (date) => ({
  payload: date,
}));
const createAppointmentError = createAction('user/createAppointmentError', (date) => ({
  payload: date,
}));

const getResolutionsPatientRequest = createAction('doctor/getPatientRequest');
const getResolutionsPatientSuccess = createAction('doctor/getPatientSuccess', (date) => ({
  payload: date,
}));
const getResolutionsPatientError = createAction('doctor/getPatientError', (date) => ({
  payload: date,
}));

export default {
  createAppointmentRequest,
  createAppointmentSuccess,
  createAppointmentError,
  getResolutionsPatientRequest,
  getResolutionsPatientSuccess,
  getResolutionsPatientError,
};
