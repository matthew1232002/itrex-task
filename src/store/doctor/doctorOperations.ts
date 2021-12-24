import { Dispatch } from 'redux';
import { NotifyError, NotifySuccess } from '../../components/UI/Notify';
import doctorAction from './doctorAction';
import { IAddResolution, IAddResolutionResponse } from '../../components/models/createResolution.model';
import { api } from '../../services/api';

export const getPatients = () => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(doctorAction.getPatientRequest());

  try {
    const { data } = await api.get('appointments/doctor/me', {
      params: {
        offset: 0,
        limit: 100,
      },
    });
    dispatch(doctorAction.getPatientSuccess(data.appointments));
  } catch (error) {
    NotifyError('Something went wrong!');
    dispatch(doctorAction.getPatientError((error as Error).message));
  }
};

export const createResolution = (values: IAddResolution) => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(doctorAction.createResolutionRequest());

  try {
    const { data } = await api.post<IAddResolutionResponse>('resolutions', values);
    dispatch(doctorAction.createResolutionSuccess(data));
    NotifySuccess('Resolution successfully added!');
  } catch (error) {
    NotifyError('Something went wrong!');
    dispatch(doctorAction.createResolutionError((error as Error).message));
  }
};

export const deleteAppointment = (appointmentId: string) => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(doctorAction.deleteAppointmentRequest());

  try {
    await api.delete<string>(`appointments/${appointmentId}`);
    dispatch(doctorAction.deleteAppointmentSuccess(appointmentId));
    NotifySuccess('Appointment successfully deleted!');
  } catch (error) {
    NotifyError('Something went wrong!');
    dispatch(doctorAction.deleteAppointmentError((error as Error).message));
  }
};
