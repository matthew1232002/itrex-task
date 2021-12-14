import React from 'react';
import moment from 'moment';
import { StyledInput, StyledLabel, StyledSpan } from './Checkbox.styled';

type CheckBoxProps = {
  time: string,
  onChangeTime: (timeValue: string) => void;

};

const Checkbox = ({ time, onChangeTime }: CheckBoxProps) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const timeValue = event.target.value;
    onChangeTime(timeValue);
  };

  return (
    <StyledLabel>
      <StyledInput type="radio" name="time" value={time} data-testid="checkbox" onChange={onChangeHandler} />
      <StyledSpan>{moment(time).format('hh:mm a')}</StyledSpan>
    </StyledLabel>
  );
};

export default Checkbox;
