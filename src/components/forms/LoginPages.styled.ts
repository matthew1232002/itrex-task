import styled from 'styled-components';
import { Form } from 'formik';

export const StyledSidebar = styled.div<{ paddingTop: string }>`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 96px 0 96px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)};

  @media (max-width: 600px) {
    padding: 0 32px;
  }
`;

export const StyledForm = styled(Form)`
  flex: 1 1 632px;
  @media (max-width: 600px) {
    flex: 1 1 435px;
  }
`;
