import React from 'react';
import { StyledInput, StyledLabel, StyledSpan } from './Checkbox.styled';

const Checkbox = ({ time, onChangeTime }) => {
  const onChangeHandler = (event) => {
    onChangeTime(event.target.value);
  };

  return (
    <StyledLabel onChange={onChangeHandler}>
      <StyledInput type="radio" name="time" value={time} />
      <StyledSpan>{time}</StyledSpan>
    </StyledLabel>
  );
};

export default Checkbox;
