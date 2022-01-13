import moment from 'moment';
import React from 'react';
import { useField } from 'formik';
import { StyledInput, StyledLabel, StyledSpan } from './Checkbox.styled';

interface ICheckboxProp {
  time: string;
  id: string;
}

const CheckboxFormik = ({ time, id }: ICheckboxProp) => {
  const [,,{ setValue }] = useField(id);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <StyledLabel>
      <StyledInput type="radio" name="time" value={time} onChange={onChangeHandler} />
      <StyledSpan>{moment(time).format('hh:mm a')}</StyledSpan>
    </StyledLabel>
  );
};

export default CheckboxFormik;
