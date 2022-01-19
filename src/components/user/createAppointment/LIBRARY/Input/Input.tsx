import React from 'react';
import { StyledInput } from '../../input/Input.styled';

interface IAuthTextInputProps {
  placeholder: string;
}

const Input = ({
  placeholder,
}: IAuthTextInputProps) => {
  // const methods = useFormContext();
  console.log('input');

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   methods.setValue(name, event.target.value);
  // };
  return (
    <StyledInput
      placeholder={placeholder}
    />
  );
};

export default React.memo(Input);
