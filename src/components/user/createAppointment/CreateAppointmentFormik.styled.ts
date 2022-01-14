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

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
