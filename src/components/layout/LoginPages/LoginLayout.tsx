import { StyledAside, StyledContainer, StyledWrapper } from './LoginLayout.styled';

import { ChildrenProps } from '../../models/children.model';

const LoginLayout = ({ children }: ChildrenProps) => (
  <StyledWrapper>
    <StyledContainer>
      <StyledAside>
        {children}
      </StyledAside>
    </StyledContainer>
  </StyledWrapper>
);

export default LoginLayout;
