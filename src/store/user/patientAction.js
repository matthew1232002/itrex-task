import { createAction } from '@reduxjs/toolkit';

const createAppointmentRequest = createAction('user/createAppointmentRequest');
const createAppointmentSuccess = createAction('user/createAppointmentSuccess');
const createAppointmentError = createAction('user/createAppointmentError');

const changeIsAdded = createAction('user/changeIsAdded');

export default {
  createAppointmentRequest,
  createAppointmentSuccess,
  createAppointmentError,
  changeIsAdded,
};
