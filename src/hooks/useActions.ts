import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addAppointment } from '../store/user/patientOperations';
import authOperations from '../store/auth/authOperations';

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

function useActions() {
  const dispatch = useDispatch();
  const createAppointment = useCallback((data) => {
    dispatch(addAppointment(data));
  }, [dispatch]);

  const loginUser = useCallback((data) => {
    dispatch(authOperations.logIn(data));
  }, [dispatch]);

  const registerUser = useCallback((data) => {
    dispatch(authOperations.register(data));
  }, [dispatch]);

  const isLogged = useSelector((state: IsLoggedState) => state.auth.isAuthenticated);
  const profile = useSelector((state: ProfileState) => state.auth.user);

  return {
    createAppointment,
    loginUser,
    registerUser,
    isLogged,
    profile,
  };
}

export default useActions;
