import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import moment from 'moment';
import TimeSlot from './TimeSlot';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import { useFetchTimeSlots } from '../../../../hooks/queryHooks/useFetchTimeSlots';

const TimeSlots = () => {
  const { setValue, register } = useFormContext();
  const occupationField = useWatch({ name: 'occupation' });
  const doctorValue = useWatch({ name: 'doctor' });
  const dateValue = useWatch({ name: 'date', defaultValue: `${moment(new Date()).format('YYYY-MM-DD')}T00:00:00.000Z` });
  const { data, isFetching, refetch } = useFetchTimeSlots(doctorValue, dateValue);

  useEffect(() => {
    setValue('time', '');
  }, [occupationField]);

  useEffect(() => {
    if (doctorValue && dateValue) {
      refetch();
    }
  }, [doctorValue, dateValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('time', e.target.value);
  };

  return (
    <>
      {isFetching && <LoadingSpinner />}
      {!doctorValue && <p>Choose the doctor</p>}
      {!isFetching && doctorValue
                && data?.length === 0 && <p>No available time</p>}
      {!isFetching && data && doctorValue
                && data.map((hour: any) => (
                  <TimeSlot key={hour} time={hour} onChange={onChange} register={register} />
                ))}
    </>
  );
};

export default TimeSlots;
