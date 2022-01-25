import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  addAppointment,
  getAppointments,
  getResolutionsPatient,
} from '../store/user/patientOperations';
import authOperations from '../store/auth/authOperations';
import {
  createResolution,
  deleteAppointment,
  getPatients,
} from '../store/doctor/doctorOperations';
import { IPatient } from '../components/models/patient.model';
import { IResolutionsPatient } from '../components/models/resolutionsPatient.model';
import { AppointmentFullInfo } from '../components/models/appointment.model';
import { ISelectOptions } from '../components/models/SelectOptions.model';

type IsLoggedState = {
  auth: {
    isAuthenticated: boolean,
    token: string
  }
};

type ProfileState = {
  auth: {
    user: {
      id: string,
      first_name: string,
      last_name: string,
      photo: string,
      role_name: string
    }
  }
};

type DoctorState = {
  doctor: {
    appointments: IPatient[],
    isLoading: boolean
  }
};

interface PatientState {
  patient:{
    resolutions: IResolutionsPatient[],
    isLoading: boolean,
    isFetchingDoctors: boolean,
    fetchingTimeSlots: boolean,
    appointments: AppointmentFullInfo[],
    specializations: ISelectOptions[],
    doctors: ISelectOptions[],
    timeSlots: string[],
    isAppointmentAdded: boolean,
  }
}

function useActions() {
  const dispatch = useDispatch();
  const history = useHistory();
  const getPatientsHandler = useCallback(() => {
    dispatch(getPatients());
  }, [dispatch]);

  const getResolutionsPatientHandler = useCallback(() => {
    dispatch(getResolutionsPatient());
  }, [dispatch]);

  const getAppointmentsHandler = useCallback(() => {
    dispatch(getAppointments());
  }, [dispatch]);

  const createAppointment = useCallback((data) => {
    dispatch(addAppointment(data, history));
  }, [dispatch]);

  const createResolutionHandler = useCallback((data) => {
    dispatch(createResolution(data));
  }, [dispatch]);

  const deleteAppointmentHandler = useCallback((data) => {
    dispatch(deleteAppointment(data));
  }, [dispatch]);

  const loginUser = useCallback((data) => {
    dispatch(authOperations.logIn(data));
  }, [dispatch]);

  const registerUser = useCallback((data) => {
    dispatch(authOperations.register(data));
  }, [dispatch]);

  const isLogged = useSelector((state: IsLoggedState) => state.auth.isAuthenticated);
  const profile = useSelector((state: ProfileState) => state.auth.user);
  const patientsList = useSelector((state: DoctorState) => state.doctor.appointments);
  const loading = useSelector((state: DoctorState) => state.doctor.isLoading);
  const isLoadingForUser = useSelector((state: PatientState) => state.patient.isLoading);
  const resolutionsPatient = useSelector((state: PatientState) => state.patient.resolutions);
  const appointments = useSelector((state: PatientState) => state.patient.appointments);
  const isAppointmentAdded = useSelector((state: PatientState) => state.patient.isAppointmentAdded);

  return {
    createAppointment,
    loginUser,
    registerUser,
    isLogged,
    profile,
    createResolutionHandler,
    deleteAppointmentHandler,
    getPatientsHandler,
    patientsList,
    loading,
    isLoadingForUser,
    getResolutionsPatientHandler,
    resolutionsPatient,
    appointments,
    getAppointmentsHandler,
    isAppointmentAdded,
  };
}

export default useActions;
