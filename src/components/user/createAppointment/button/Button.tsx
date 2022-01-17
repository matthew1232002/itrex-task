import styled from 'styled-components';
import { FormikValues, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
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
  const { values } = useFormikContext<FormikValues>();
  const [isDisabled, setIsDisabled] = useState(true);
  const { isAppointmentAdded } = useActions();

  useEffect(() => {
    setIsDisabled(true);
  }, [isAppointmentAdded]);

  useEffect(() => {
    if (values.occupation && values.doctorName
        && values.date && values.time
        && values.reason.length >= 4) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [values]);

  return (
    <StyledButton type="submit" disabled={isDisabled}>
      {!isAppointmentAdded ? 'Submit' : <LoadingDots />}
    </StyledButton>
  );
};

export default Button;
