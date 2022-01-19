import moment from 'moment';
import React from 'react';
import { StyledInput, StyledLabel, StyledSpan } from './Checkbox.styled';

interface ICheckboxProp {
  time: string;
  setValue: any;
}

const Checkbox = ({ time, setValue }: ICheckboxProp) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue('time ', event.target.value);
  };
  return (
    <StyledLabel>
      <StyledInput type="radio" name="time" value={time} onChange={onChangeHandler} />
      <StyledSpan>{moment(`2021-11-22${time}`).format('hh:mm a')}</StyledSpan>
    </StyledLabel>
  );
};

export default Checkbox;
