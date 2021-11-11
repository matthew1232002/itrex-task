import styled from "styled-components";
import {Form} from "formik";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 96px;

  @media (max-width: 600px) {
    padding: 0 32px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;