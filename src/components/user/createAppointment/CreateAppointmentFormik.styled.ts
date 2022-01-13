import styled from 'styled-components';
import { Form } from 'formik';

export const StyledWrapper = styled.div`
  padding: 0 32px 0 0;
`;

export const StyledForm = styled(Form)`
`;

export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCrumbs = styled.div`
  margin: 0 0 72px 0;
`;

export const StyledSubtitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  margin: 0 0 40px 0;
`;

export const StyledContainer = styled.div<{ width: string }>`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : '')};
`;

export const StyledInputWrapper = styled.div`
  margin-bottom: 64px;
  position: relative;
  &:last-of-type{
    margin-bottom: 80px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  position: absolute;
  top: -25px;
`;

export const StyledErrorMessage = styled.p`
  color: #F6657F;
  position: absolute;
  top: 110%;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #DCE0EC;
  border-radius: 8px;
  height: 56px;
  padding: 0 0 0 24px;
  transition: 100ms linear;
  cursor: pointer;

  &:hover {
    border-color: hsl(0, 0%, 70%);
  }

  &:focus {
    border-color: #7297FF;
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
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
