import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Checkbox from './Checkbox';
import useActions from '../../../../hooks/useActions';

const Checkboxes = () => {
  const { getTimeSlotsHandler } = useActions();
  const { setValue } = useFormContext();
  const doctorValue = useWatch({ name: 'doctor' });
  const dateValue = useWatch({ name: 'date' });

  const allTime = [
    'T05:00:00.000Z',
    'T06:00:00.000Z',
    'T07:00:00.000Z',
    'T08:00:00.000Z',
    'T09:00:00.000Z',
    'T10:00:00.000Z',
    'T11:00:00.000Z',
    'T12:00:00.000Z',
    'T13:00:00.000Z',
    'T14:00:00.000Z',
    'T15:00:00.000Z',
    'T16:00:00.000Z',
    'T17:00:00.000Z',
  ];

  useEffect(() => {
    if (doctorValue && dateValue) {
      console.log('Mojno');
      getTimeSlotsHandler({ doctorId: doctorValue, date: dateValue });
    }
  }, [doctorValue, dateValue]);

  return (
    <>
      {allTime.map((hour) => (
        <Checkbox key={hour} time={hour} setValue={setValue} />
      ))}
      {/* {fetchingTimeSlots && <LoadingSpinner />} */}
      {/* {!doctorValue && <p>Choose the doctor</p>} */}
      {/* {!fetchingTimeSlots && doctorValue */}
      {/*    && timeSlots?.length === 0 && <p>No available time</p>} */}
      {/* {!fetchingTimeSlots && timeSlots && doctorValue */}
      {/*          && timeSlots.map((hour) => ( */}
      {/*            <Checkbox key={hour} time={hour} setValue={setValue} /> */}
      {/*          ))} */}
    </>
  );
};

export default Checkboxes;
