import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import patientAction from './patientAction';
import { AddAppointmentResponseType } from '../../components/models/addAppointment.model';
import { IResolutionsPatient } from '../../components/models/resolutionsPatient.model';
import { ISelectOptions } from '../../components/models/SelectOptions.model';

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

const specializations = createReducer<Array<ISelectOptions>>([], {
  [patientAction.getSpecializationsSuccess.type]: (
    state,
    { payload }: PayloadAction<Array<ISelectOptions>>,
  ) => [...payload],
});

const doctors = createReducer<Array<ISelectOptions>>([], {
  [patientAction.getSpecializationsSuccess.type]: (
    state,
    { payload }: PayloadAction<Array<ISelectOptions>>,
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
  [patientAction.getSpecializationsRequest.type]: () => true,
  [patientAction.getSpecializationsSuccess.type]: () => false,
});

const isFetchingDoctors = createReducer(false, {
  [patientAction.getDoctorsRequest.type]: () => true,
  [patientAction.getDoctorsSuccess.type]: () => false,
});

export default combineReducers({
  appointments,
  resolutions,
  specializations,
  doctors,
  error,
  isLoading,
  isFetchingDoctors,
});
