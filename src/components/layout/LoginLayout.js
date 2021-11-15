import React from 'react';

import { StyledAside, StyledWrapper } from './LoginLayout.styled';

const LoginLayout = ({ children }) => (
  <StyledWrapper>
    <StyledAside>
      {children}
    </StyledAside>
  </StyledWrapper>
);

export default LoginLayout;
