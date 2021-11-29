import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import patientAction from './patientAction';

const appointments = createReducer([], {
  [patientAction.createAppointmentSuccess]: (state, { payload }) => [...state, payload],
});

const error = createReducer(null, {
  [patientAction.createAppointmentError]: (_, { payload }) => payload,
});

const isAdded = createReducer(false, {
  [patientAction.createAppointmentSuccess]: () => true,
  [patientAction.changeIsAdded]: () => false,
});

export default combineReducers({
  appointments,
  error,
  isAdded,
});
