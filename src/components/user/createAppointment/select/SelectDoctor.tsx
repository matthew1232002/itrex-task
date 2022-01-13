import React, { useEffect, useState } from 'react';
import {
  FormikValues, useField, useFormikContext,
} from 'formik';
import { CustomSelect } from '../Form/Select.styled';
import { getDoctorsBySpecializations } from '../../../../store/user/patientOperations';
import { StyledErrorMessage } from '../CreateAppointmentFormik.styled';

interface ISelectProps {
  id: string;
}

const SelectDoctor = ({ id }: ISelectProps) => {
  const { values } = useFormikContext<FormikValues>();
  const [,meta, { setValue }] = useField(id);
  const [doctors, setDoctors] = useState([]);
  const [val, setVal] = useState<any>(undefined);

  useEffect(() => {
    if (values.occupation) {
      setVal(null);
      getDoctorsBySpecializations(values.occupation)
        .then((response) => setDoctors(response));
    }
  }, [values.occupation]);

  const onChange = (option: unknown) => {
    setValue((option as HTMLInputElement).value);
    setVal(option);
  };
  return (
    <>
      <CustomSelect
        options={doctors}
        placeholder="Select a doctor’s name"
        classNamePrefix="Select"
        value={val}
        onChange={onChange}
      />
      {meta.error && values.occupation
          && <StyledErrorMessage>*Choose a doctor’s name*</StyledErrorMessage>}
    </>

  );
};

export default SelectDoctor;
