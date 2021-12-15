import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addAppointment, getResolutionsPatient } from '../store/user/patientOperations';
import authOperations from '../store/auth/authOperations';
import {
  createResolution,
  deleteAppointment,
  getPatients,
} from '../store/doctor/doctorOperations';
import { IPatient } from '../components/models/patient.model';
import { IResolutionsPatient } from '../components/models/resolutionsPatient.model';

type IsLoggedState = {
  auth: {
    isAuthenticated: boolean
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
    patients: IPatient[],
    isLoading: boolean
  }
};

interface PatientState {
  patient:{
    resolutions: IResolutionsPatient[]
  }
}

function useActions() {
  const dispatch = useDispatch();
  const getPatientsHandler = useCallback(() => {
    dispatch(getPatients());
  }, [dispatch]);

  const getResolutionsPatientHandler = useCallback(() => {
    dispatch(getResolutionsPatient());
  }, [dispatch]);

  const createAppointment = useCallback((data) => {
    dispatch(addAppointment(data));
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
  const patientsList = useSelector((state: DoctorState) => state.doctor.patients);
  const loading = useSelector((state: DoctorState) => state.doctor.isLoading);
  const resolutionsPatient = useSelector((state: PatientState) => state.patient.resolutions);

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
    getResolutionsPatientHandler,
    resolutionsPatient,
  };
}

export default useActions;
