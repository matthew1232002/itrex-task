import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import patientAction from './patientAction';

const doctorList = createReducer([], {
  [patientAction.setDoctorList]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  doctorList,
});
