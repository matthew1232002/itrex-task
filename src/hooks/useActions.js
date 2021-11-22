import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import patientAction from '../store/user/patientAction';
import patientSelector from '../store/user/patientSelector';
import authSelector from '../store/auth/authSelector';
import authOperations from '../store/auth/authOperations';

function useActions() {
  const dispatch = useDispatch();
  const createAppointment = useCallback((data) => {
    dispatch(patientAction.setDoctorList(data));
  }, [dispatch]);

  const loginUser = useCallback((data) => {
    dispatch(authOperations.logIn(data));
  }, [dispatch]);

  const appointments = useSelector(patientSelector.getDoctorList);
  const isLogged = useSelector(authSelector.getIsAuthenticated);

  return {
    createAppointment,
    appointments,
    loginUser,
    isLogged,
  };
}

export default useActions;
