import { Dispatch } from 'redux';
import patientActions from './patientAction';
import { SpecializationsType } from '../../components/models/specializations.model';
import { DoctorsBySpecializationType } from '../../components/models/doctorsBySpecialization.model';
import { AddAppointmentResponseType, AddAppointmentType } from '../../components/models/addAppointment.model';
import { NotifyError, NotifySuccess } from '../../components/UI/Notify';
import { api } from '../../services/api';
import routes from '../../routes/routes';

export const getAllSpecializations = () => api.get('specializations').then((response) => response.data.map((item: SpecializationsType) => (
  {
    value: item.id,
    label: item.specialization_name,
  }
))).catch(() => NotifyError('Failed to load Occupations'));

export const getDoctorsBySpecializations = (specializationId: string) => api.get(`doctors/specialization/${specializationId}`)
  .then((response) => response.data.map((item: DoctorsBySpecializationType) => ({
    value: item.id,
    label: `${item.first_name} ${item.last_name}`,
  }))).catch(() => NotifyError('Failed to load Doctors'));

export const getAvailableTime = (doctorId: string, date: string) => api.get('appointments/time/free', {
  params: {
    doctorId,
    date,
  },
}).then((response) => response.data)
  .catch(() => NotifyError('Failed to load time slots'));

export const addAppointment = (values: AddAppointmentType, history: any) => async (
  dispatch: Dispatch<{ type: string }>,
) => {
  dispatch(patientActions.createAppointmentRequest());

  try {
    const { data } = await api.post<AddAppointmentResponseType>('appointments', values);
    dispatch(patientActions.createAppointmentSuccess(data));
    history.replace(routes.userAppointmentsPage);
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
