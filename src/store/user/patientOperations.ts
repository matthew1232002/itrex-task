import { Dispatch } from 'redux';
import patientActions from './patientAction';
import { SpecializationsType } from '../../components/models/specializations.model';
import { DoctorsBySpecializationType } from '../../components/models/doctorsBySpecialization.model';
import { AddAppointmentResponseType, AddAppointmentType } from '../../components/models/addAppointment.model';
import { NotifyError, NotifySuccess } from '../../components/UI/Notify';
import { api } from '../../services/api';
import { ITimeSlots } from '../../components/models/TimeSlotsType.model';

export const getSpecializations = () => async (dispatch: Dispatch<{ type: string }>) => {
  dispatch(patientActions.getSpecializationsRequest());

  try {
    const data = await api.get('specializations').then((response) => response.data.map((item: SpecializationsType) => (
      {
        value: item.id,
        label: item.specialization_name,
      }
    )));
    dispatch(patientActions.getSpecializationsSuccess(data));
  } catch (error) {
    dispatch(patientActions.getSpecializationsError((error as Error).message));
  }
};

export const getDoctors = (specializationId: string) => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(patientActions.getDoctorsRequest());

  try {
    const data = await api.get(`doctors/specialization/${specializationId}`)
      .then((response) => response.data.map((item: DoctorsBySpecializationType) => ({
        value: item.id,
        label: `${item.first_name} ${item.last_name}`,
      })));
    dispatch(patientActions.getDoctorsSuccess(data));
  } catch (error) {
    dispatch(patientActions.getDoctorsError((error as Error).message));
  }
};

export const getTimeSlots = (values: ITimeSlots) => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(patientActions.getTimeSlotsRequest());
  try {
    const { data } = await api.get('appointments/time/free', {
      params: {
        doctorId: values.doctorId,
        date: values.date,
      },
    });
    dispatch(patientActions.getTimeSlotsSuccess(data));
  } catch (error) {
    dispatch(patientActions.getTimeSlotsError((error as Error).message));
  }
};

export const addAppointment = (values: AddAppointmentType) => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(patientActions.createAppointmentRequest());

  try {
    const { data } = await api.post<AddAppointmentResponseType>('appointments', values);
    dispatch(patientActions.createAppointmentSuccess(data));
    NotifySuccess('Appointment successfully added!');
  } catch (error) {
    NotifyError('Something went wrong!');
    dispatch(patientActions.createAppointmentError((error as Error).message));
  }
};

export const getResolutionsPatient = () => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(patientActions.getResolutionsPatientRequest());

  try {
    const { data } = await api.get('resolutions/patient/me', {
      params: {
        offset: 0,
        limit: 100,
      },
    });
    dispatch(patientActions.getResolutionsPatientSuccess(data.resolutions));
  } catch (error) {
    NotifyError('Something went wrong!');
    dispatch(patientActions.getResolutionsPatientError((error as Error).message));
  }
};

export const getAppointments = () => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(patientActions.getAppointmentsRequest());

  try {
    const { data } = await api.get('appointments/patient/me', {
      params: {
        offset: 0,
        limit: 100,
      },
    });
    dispatch(patientActions.getAppointmentsSuccess(data.appointments));
  } catch (error) {
    NotifyError('Something went wrong!');
    dispatch(patientActions.getAppointmentsError((error as Error).message));
  }
};
