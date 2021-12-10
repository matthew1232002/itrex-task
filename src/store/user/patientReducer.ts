import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import patientAction from './patientAction';
import { AddAppointmentResponseType } from '../../components/models/addAppointment.model';

const appointments = createReducer<Array<AddAppointmentResponseType>>([], {
  [patientAction.createAppointmentSuccess.type]: (
    state,
    { payload }: PayloadAction<AddAppointmentResponseType>,
  ) => [...state, payload],
});

const error = createReducer<string>('', {
  [patientAction.createAppointmentError.type]: (
    _: string,
    { payload }: PayloadAction<string>,
  ) => payload,
});

export default combineReducers({
  appointments,
  error,
});
