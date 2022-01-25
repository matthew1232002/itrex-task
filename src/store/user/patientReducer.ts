import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import patientAction from './patientAction';
import { AddAppointmentResponseType } from '../../components/models/addAppointment.model';
import { IResolutionsPatient } from '../../components/models/resolutionsPatient.model';

const appointments = createReducer<Array<AddAppointmentResponseType>>([], {
  [patientAction.getAppointmentsSuccess.type]: (
    state,
    { payload }: PayloadAction<Array<AddAppointmentResponseType>>,
  ) => [...payload],
});

const resolutions = createReducer<Array<IResolutionsPatient>>([], {
  [patientAction.getResolutionsPatientSuccess.type]: (
    state,
    { payload }: PayloadAction<Array<IResolutionsPatient>>,
  ) => [...payload],
});

const error = createReducer<string>('', {
  [patientAction.createAppointmentError.type]: (
    _: string,
    { payload }: PayloadAction<string>,
  ) => payload,
});

const isLoading = createReducer(false, {
  [patientAction.getResolutionsPatientRequest.type]: () => true,
  [patientAction.getResolutionsPatientSuccess.type]: () => false,
  [patientAction.getAppointmentsRequest.type]: () => true,
  [patientAction.getAppointmentsSuccess.type]: () => false,
});

const isAppointmentAdded = createReducer(false, {
  [patientAction.createAppointmentRequest.type]: () => true,
  [patientAction.createAppointmentSuccess.type]: () => false,
  [patientAction.createAppointmentError.type]: () => false,
});

export default combineReducers({
  appointments,
  resolutions,
  error,
  isLoading,
  isAppointmentAdded,
});
