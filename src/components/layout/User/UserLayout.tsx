import { StyledMain } from './UserLayout.styled';
import userAvatar from '../../../assets/UserPageAvatar.png';
import DoctorAndUserLayout from '../DoctorAndUserLayout';
import Header from '../Header/Header';
import { ChildrenProps } from '../../models/children.model';

const UserLayout = ({ children }: ChildrenProps) => (
  <DoctorAndUserLayout>
    <Header name="Larry Prinston" status="Patient" userAvatar={userAvatar} />
    <StyledMain>
      {children}
    </StyledMain>
  </DoctorAndUserLayout>
);

export default UserLayout;
