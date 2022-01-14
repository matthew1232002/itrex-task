import React, { useEffect, useState } from 'react';
import {
  FormikValues, useField, useFormikContext,
} from 'formik';
import { CustomSelect } from './Select.styled';
import { StyledErrorMessage } from '../error/ErrorMessage.styled';
import useActions from '../../../../hooks/useActions';

interface ISelectProps {
  id: string;
}

const SelectDoctor = ({ id }: ISelectProps) => {
  const { values } = useFormikContext<FormikValues>();
  const [,meta, { setValue }] = useField(id);
  const [val, setVal] = useState<any>(undefined);
  const [isDisabled, setIsDisabled] = useState(true);
  const { doctors, fetchingDoctors, getDoctorsHandler } = useActions();

  useEffect(() => {
    if (values.occupation) {
      setVal(null);
      setIsDisabled(false);
      getDoctorsHandler(values.occupation);
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
        isDisabled={isDisabled}
        isLoading={fetchingDoctors}
      />
      {meta.error && values.occupation
          && <StyledErrorMessage>*Choose a doctor’s name*</StyledErrorMessage>}
    </>

  );
};

export default SelectDoctor;
