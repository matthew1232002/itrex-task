import { createAction } from '@reduxjs/toolkit';

const createAppointmentRequest = createAction('user/createAppointmentRequest');
const createAppointmentSuccess = createAction('user/createAppointmentSuccess');
const createAppointmentError = createAction('user/createAppointmentError');

export default {
  createAppointmentRequest,
  createAppointmentSuccess,
  createAppointmentError,
};
