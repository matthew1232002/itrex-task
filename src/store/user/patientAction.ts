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

const getSpecializationsRequest = createAction('user/getSpecializationsRequest');
const getSpecializationsSuccess = createAction('user/getSpecializationsSuccess', (date) => ({
  payload: date,
}));
const getSpecializationsError = createAction('user/getSpecializationsError', (date) => ({
  payload: date,
}));

const getDoctorsRequest = createAction('user/getDoctorsRequest');
const getDoctorsSuccess = createAction('user/getDoctorsSuccess', (date) => ({
  payload: date,
}));
const getDoctorsError = createAction('user/getDoctorsError', (date) => ({
  payload: date,
}));

const getTimeSlotsRequest = createAction('user/getTimeSlotsRequest');
const getTimeSlotsSuccess = createAction('user/getTimeSlotsSuccess', (date) => ({
  payload: date,
}));
const getTimeSlotsError = createAction('user/getTimeSlotsError', (date) => ({
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
  getSpecializationsRequest,
  getSpecializationsSuccess,
  getSpecializationsError,
  getDoctorsRequest,
  getDoctorsSuccess,
  getDoctorsError,
  getTimeSlotsRequest,
  getTimeSlotsSuccess,
  getTimeSlotsError,
};
