import React, { useEffect } from 'react';
import { FormikHandlers, useField } from 'formik';
import { CustomSelect } from './Select.styled';
import { StyledErrorMessage } from '../error/ErrorMessage.styled';
import useActions from '../../../../hooks/useActions';

interface ISelectProps {
  id: string;
  handleReset(name: string, value: string): FormikHandlers;
}

const SelectOccupations = ({ id, handleReset }: ISelectProps) => {
  const { specializations, isLoadingForUser, getSpecializationsHandler } = useActions();
  const [, meta, { setValue }] = useField(id);

  useEffect(() => {
    getSpecializationsHandler();
  }, []);

  const onChange = (option: unknown) => {
    handleReset('doctorName', '');
    handleReset('time', '');
    handleReset('reason', '');
    setValue((option as HTMLInputElement).value);
  };

  return (
    <>
      <CustomSelect
        options={specializations}
        placeholder="Select an occupation"
        classNamePrefix="Select"
        onChange={onChange}
        isLoading={isLoadingForUser}
      />
      {meta.error && <StyledErrorMessage>*Choose an occupation*</StyledErrorMessage>}
    </>
  );
};

export default SelectOccupations;
