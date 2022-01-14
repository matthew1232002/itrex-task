import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  addAppointment,
  getAppointments, getDoctors,
  getResolutionsPatient,
  getSpecializations,
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
import routes from '../routes/routes';
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
    appointments: AppointmentFullInfo[],
    specializations: ISelectOptions[],
    doctors: ISelectOptions[],
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

  const getSpecializationsHandler = useCallback(() => {
    dispatch(getSpecializations());
  }, [dispatch]);

  const getDoctorsHandler = useCallback((data) => {
    dispatch(getDoctors(data));
  }, [dispatch]);

  const createAppointment = useCallback((data) => {
    dispatch(addAppointment(data));
    history.replace(routes.userAppointmentsPage);
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
  const fetchingDoctors = useSelector((state: PatientState) => state.patient.isFetchingDoctors);
  const resolutionsPatient = useSelector((state: PatientState) => state.patient.resolutions);
  const appointments = useSelector((state: PatientState) => state.patient.appointments);
  const specializations = useSelector((state: PatientState) => state.patient.specializations);
  const doctors = useSelector((state: PatientState) => state.patient.doctors);

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
    fetchingDoctors,
    getResolutionsPatientHandler,
    resolutionsPatient,
    appointments,
    getAppointmentsHandler,
    specializations,
    getSpecializationsHandler,
    doctors,
    getDoctorsHandler,
  };
}

export default useActions;
