import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import moment from 'moment';
import TimeSlot from './TimeSlot';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import { getAvailableTime } from '../../../../store/user/patientOperations';

const TimeSlots = () => {
  const { setValue, register } = useFormContext();
  const [timeSlots, setTimeSlots] = useState([]);
  const [fetchingTimeSlots, setFetchingTimeSlots] = useState(false);
  const doctorValue = useWatch({ name: 'doctor' });
  const dateValue = useWatch({ name: 'date', defaultValue: `${moment(new Date()).format('YYYY-MM-DD')}T00:00:00.000Z` });

  useEffect(() => {
    if (doctorValue && dateValue) {
      setFetchingTimeSlots(true);
      getAvailableTime(doctorValue, dateValue)
        .then((response) => {
          setTimeSlots(response);
          setFetchingTimeSlots(false);
        })
        .catch(() => setFetchingTimeSlots(false));
    }
  }, [doctorValue, dateValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('time', e.target.value);
  };

  return (
    <>
      {fetchingTimeSlots && <LoadingSpinner />}
      {!doctorValue && <p>Choose the doctor</p>}
      {!fetchingTimeSlots && doctorValue
                && timeSlots?.length === 0 && <p>No available time</p>}
      {!fetchingTimeSlots && timeSlots && doctorValue
                && timeSlots.map((hour) => (
                  <TimeSlot key={hour} time={hour} onChange={onChange} register={register} />
                ))}
    </>
  );
};

export default TimeSlots;
