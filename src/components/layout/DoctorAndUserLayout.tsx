import { StyledContainer, StyledWrapper } from './DoctorAndUserLayout.styled';
import { ChildrenProps } from '../models/children.model';

const DoctorAndUserLayout = ({ children }: ChildrenProps) => (
  <StyledWrapper>
    <StyledContainer>
      {children}
    </StyledContainer>
  </StyledWrapper>
);

export default DoctorAndUserLayout;
