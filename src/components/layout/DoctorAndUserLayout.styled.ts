import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  background: #E4EBFF;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const StyledContainer = styled.div`
  height: 100vh;
  padding: 0 64px 48px 64px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;
