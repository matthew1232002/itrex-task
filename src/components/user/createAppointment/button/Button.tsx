import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import LoadingDots from './LoadingDots';
import useActions from '../../../../hooks/useActions';

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: ${(props) => (!props.disabled ? '#7297FF' : '#DCE0EC')};
  color: #ffffff;
  border-radius: 8px;
  line-height: 24px;
  padding: 16px 50px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Button = () => {
  const timeValue = useWatch({ name: 'time' });
  const reasonValue = useWatch({ name: 'reason' });
  const [isDisabled, setIsDisabled] = useState(true);
  const { isAppointmentAdded } = useActions();

  useEffect(() => {
    setIsDisabled(true);
  }, [isAppointmentAdded]);

  useEffect(() => {
    if (timeValue
        && reasonValue?.length >= 4) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [timeValue, reasonValue]);

  return (
    <StyledButton type="submit" disabled={isDisabled}>
      {!isAppointmentAdded ? 'Submit' : <LoadingDots />}
    </StyledButton>
  );
};

export default Button;
