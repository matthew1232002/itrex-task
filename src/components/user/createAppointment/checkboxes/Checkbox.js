import moment from 'moment';
import { StyledInput, StyledLabel, StyledSpan } from './Checkbox.styled';

const Checkbox = ({ time, onChangeTime }) => {
  const onChangeHandler = (event) => {
    const timeValue = event.target.value;
    onChangeTime(timeValue);
  };

  return (
    <StyledLabel onChange={onChangeHandler}>
      <StyledInput type="radio" name="time" value={time} />
      <StyledSpan>{moment(time).format('hh:mm a')}</StyledSpan>
    </StyledLabel>
  );
};

export default Checkbox;
