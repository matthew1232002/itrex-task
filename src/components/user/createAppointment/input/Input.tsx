import {
  ErrorMessage, FormikHandlers, FormikValues, useField, useFormikContext,
} from 'formik';
import React, { useCallback, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { StyledInput } from './Input.styled';
import { StyledErrorMessage } from '../error/ErrorMessage.styled';

interface IAuthTextInputProps {
  name: string;
  id: string;
  placeholder: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): FormikHandlers;
}

const Input = ({
  name, id, placeholder, onChange,
}: IAuthTextInputProps) => {
  const [field, meta] = useField(id);
  const { values } = useFormikContext<FormikValues>();
  const [innerValue, setInnerValue] = useState('');

  const debouncedHandleOnChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    }, 400,
  );

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInnerValue(newValue);
    debouncedHandleOnChange(event);
  }, []);

  return (
    <>
      <StyledInput
        placeholder={placeholder}
        {...field}
        name={name}
        id={id}
        value={innerValue}
        onChange={handleOnChange}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
      </ErrorMessage>
      {values.occupation
                && values.doctorName && meta.error && !meta.touched
                && <StyledErrorMessage>Reason is required field</StyledErrorMessage>}
    </>

  );
};

export default Input;
