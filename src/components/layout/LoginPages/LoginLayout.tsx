import { StyledAside, StyledWrapper } from './LoginLayout.styled';

import { ChildrenProps } from '../../models/children.model';

const LoginLayout = ({ children }: ChildrenProps) => (
  <StyledWrapper>
    <StyledAside>
      {children}
    </StyledAside>
  </StyledWrapper>
);

export default LoginLayout;
