import { StyledMain } from './UserLayout.styled';
import DoctorAndUserLayout from '../DoctorAndUserLayout';
import Header from '../Header/Header';
import { ChildrenProps } from '../../models/children.model';

const UserLayout = ({ children }: ChildrenProps) => (
  <DoctorAndUserLayout>
    <Header />
    <StyledMain>
      {children}
    </StyledMain>
  </DoctorAndUserLayout>
);

export default UserLayout;
