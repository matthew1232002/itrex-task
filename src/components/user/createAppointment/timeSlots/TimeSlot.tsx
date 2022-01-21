import moment from 'moment';
import React from 'react';
import { StyledInput, StyledLabel, StyledSpan } from './TimeSlot.styled';

interface ITimeSlotsProp {
  time: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: any;
}

const TimeSlot = ({ time, onChange, register }: ITimeSlotsProp) => (
  <StyledLabel>
    <StyledInput {...register('time')} type="radio" name="time" value={time} onChange={onChange} />
    <StyledSpan>{moment(time).format('hh:mm a')}</StyledSpan>
  </StyledLabel>
);
export default TimeSlot;
