import { createAction } from '@reduxjs/toolkit';

const createAppointmentRequest = createAction('user/createAppointmentRequest');
const createAppointmentSuccess = createAction('user/createAppointmentSuccess', (date) => ({
  payload: date,
}));
const createAppointmentError = createAction('user/createAppointmentError', (date) => ({
  payload: date,
}));

export default {
  createAppointmentRequest,
  createAppointmentSuccess,
  createAppointmentError,
};
