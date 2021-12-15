import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import doctorAction from './doctorAction';
import { IAddResolutionResponse } from '../../components/models/createResolution.model';
import { IPatient } from '../../components/models/patient.model';

const patients = createReducer<Array<IPatient>>([], {
  [doctorAction.getPatientSuccess.type]: (
    state,
    { payload }: PayloadAction<Array<IPatient>>,
  ) => [...payload],
  [doctorAction.deleteAppointmentSuccess.type]:
      (state, { payload }: PayloadAction<string>) => state.filter((item) => item.id !== payload),
});

const isLoading = createReducer(false, {
  [doctorAction.deleteAppointmentRequest.type]: () => true,
  [doctorAction.deleteAppointmentSuccess.type]: () => false,
  [doctorAction.getPatientRequest.type]: () => true,
  [doctorAction.getPatientSuccess.type]: () => false,
});

const resolutions = createReducer<Array<IAddResolutionResponse>>([], {
  [doctorAction.createResolutionSuccess.type]: (
    state,
    { payload }: PayloadAction<IAddResolutionResponse>,
  ) => [...state, payload],
});

const error = createReducer<string>('', {
  [doctorAction.createResolutionError.type]: (
    _: string,
    { payload }: PayloadAction<string>,
  ) => payload,
  [doctorAction.deleteAppointmentError.type]: (
    _: string,
    { payload }: PayloadAction<string>,
  ) => payload,
});

export default combineReducers({
  patients,
  resolutions,
  error,
  isLoading,
});
