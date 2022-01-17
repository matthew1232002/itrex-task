import React, { useEffect } from 'react';
import { FormikValues, useFormikContext } from 'formik';
import Checkbox from './Checkbox';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import useActions from '../../../../hooks/useActions';

const Checkboxes = ({ id }: { id: string }) => {
  const { values } = useFormikContext<FormikValues>();
  const { timeSlots, getTimeSlotsHandler, fetchingTimeSlots } = useActions();

  useEffect(() => {
    if (values.doctorName && values.date) {
      getTimeSlotsHandler({ doctorId: values.doctorName, date: values.date });
    }
  }, [values.doctorName, values.date]);

  return (
    <>
      {fetchingTimeSlots && <LoadingSpinner />}
      {!values.doctorName && <p>Choose the doctor</p>}
      {values.doctorName && timeSlots?.length === 0 && <p>No available time</p>}
      {!fetchingTimeSlots && timeSlots && values.doctorName
                && timeSlots.map((hour) => (
                  <Checkbox key={hour} time={hour} id={id} />
                ))}
    </>
  );
};

export default Checkboxes;
