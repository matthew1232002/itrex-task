import moment from 'moment';
import React from 'react';
import { StyledInput, StyledLabel, StyledSpan } from './Checkbox.styled';

interface ICheckboxProp {
  time: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: any;
}

const Checkbox = ({ time, onChange, register }: ICheckboxProp) => (
  <StyledLabel>
    <StyledInput {...register('time')} type="radio" name="time" value={time} onChange={onChange} />
    <StyledSpan>{moment(time).format('hh:mm a')}</StyledSpan>
  </StyledLabel>
);
export default Checkbox;
