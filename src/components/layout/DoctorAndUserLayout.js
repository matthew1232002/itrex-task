import React from 'react';
import { StyledContainer, StyledWrapper } from './DoctorAndUserLayout.styled';

const DoctorAndUserLayout = ({ children }) => (
  <StyledWrapper>
    <StyledContainer>
      {children}
    </StyledContainer>
  </StyledWrapper>
);

export default DoctorAndUserLayout;
