import React, { useState, useRef } from 'react';

import { ErrorMessage, useField } from 'formik';
import { StyledEye, StyledInput, StyledWrapper } from './inputField.styled';
import Eye from '../../../assets/eye1.png';

type InputProps = {
  type: string;
  placeholder: string;
  testId: string;
  name: string
};

const InputField = ({
  type, placeholder, testId, name, ...props
}: InputProps) => {
  const [inputEyeStyle, setInputEyeStyle] = useState({});
  const [field, meta] = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const errorClass = meta.touched && meta.error ? {
    border: '1px solid #F6657F',
  } : {};

  const togglePassword = () => {
    const input = inputRef.current!;
    if (input.type === 'password') {
      input.type = 'text';
      setInputEyeStyle({
        width: '29px',
        height: '29px',
        background: `url(${Eye})`,
      });
      return;
    }
    input.type = 'password';
    setInputEyeStyle({});
  };
  return (
    <StyledWrapper>
      <StyledInput
        data-testid={testId}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        ref={inputRef}
        {...field}
        {...props}
        style={errorClass}
      />
      {(field.name === 'password' || field.name === 'confirmPassword')
        && <StyledEye style={inputEyeStyle} onClick={togglePassword} />}
      <ErrorMessage component="p" name={field.name} />
    </StyledWrapper>
  );
};

export default InputField;
