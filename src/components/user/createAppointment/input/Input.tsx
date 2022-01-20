import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { StyledInput } from './Input.styled';
import { StyledErrorMessage } from '../error/ErrorMessage.styled';

interface IAuthTextInputProps {
  placeholder: string;
  register: any;
  name: string;
}

const Input = ({
  placeholder, register, name,
}: IAuthTextInputProps) => {
  const { formState: { errors }, trigger } = useFormContext();
  useEffect(() => {
    trigger();
  }, [trigger]);
  return (
    <>
      <StyledInput
        {...register(name)}
        placeholder={placeholder}
      />
      <StyledErrorMessage>{errors[name]?.message}</StyledErrorMessage>
    </>
  );
};

export default React.memo(Input);
