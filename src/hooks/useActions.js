import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { appointmentItems, appointmentsActions } from '../store/user-appointments';

function usePatient() {
  const dispatch = useDispatch();
  const createAppointment = useCallback((data) => {
    dispatch(appointmentsActions.addAppointment(data));
  }, [dispatch]);

  const appointments = useSelector(appointmentItems);

  return {
    createAppointment,
    appointments,
  };
}

export default usePatient;
