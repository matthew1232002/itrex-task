import React, { useEffect, useState } from 'react';
import { FormikValues, useFormikContext } from 'formik';
import CheckboxFormik from './CheckboxFormik';
import { getAvailableTime } from '../../../../store/user/patientOperations';

const CheckboxesFormik = ({ id }: { id: string }) => {
  const [availableHours, setAvailableHours] = useState<Array<string>>();
  const { values } = useFormikContext<FormikValues>();

  useEffect(() => {
    if (values.doctorName && values.date) {
      getAvailableTime(values.doctorId, values.date)
        .then((response) => setAvailableHours(response.data));
    }
  }, [values.doctorName, values.date]);

  return (
    <>
      {!values.doctorName && <p>Choose the doctor</p>}
      {values.doctorName && availableHours?.length === 0 && <p>No available time</p>}
      {availableHours && values.doctorName
                && availableHours.map((hour) => (
                  <CheckboxFormik key={hour} time={hour} id={id} />
                ))}
    </>
  );
};

export default CheckboxesFormik;
