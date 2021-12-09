import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addAppointment, changeIsAddedState } from '../store/user/patientOperations';
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

type IsAddedState = {
  doctors: {
    isAdded: boolean
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

  const changeIsAdded = () => {
    dispatch(changeIsAddedState());
  };

  const isLogged = useSelector((state: IsLoggedState) => state.auth.isAuthenticated);
  const profile = useSelector((state: ProfileState) => state.auth.user);
  const isAdded = useSelector((state: IsAddedState) => state.doctors.isAdded);

  return {
    createAppointment,
    loginUser,
    registerUser,
    changeIsAdded,
    isLogged,
    profile,
    isAdded,
  };
}

export default useActions;
