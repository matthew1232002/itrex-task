import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import moment from 'moment';
import TimeSlot from './TimeSlot';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import useActions from '../../../../hooks/useActions';

const TimeSlots = () => {
  const { getTimeSlotsHandler, fetchingTimeSlots, timeSlots } = useActions();
  const { setValue, register } = useFormContext();
  const doctorValue = useWatch({ name: 'doctor' });
  const dateValue = useWatch({ name: 'date', defaultValue: `${moment(new Date()).format('YYYY-MM-DD')}T00:00:00.000Z` });

  useEffect(() => {
    if (doctorValue && dateValue) {
      getTimeSlotsHandler({ doctorId: doctorValue, date: dateValue });
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
