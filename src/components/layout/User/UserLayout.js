import { StyledMain } from './UserLayout.styled';
import userAvatar from '../../../assets/UserPageAvatar.png';
import DoctorAndUserLayout from '../DoctorAndUserLayout';
import Header from '../Header/Header';

const UserLayout = ({ children }) => (
  <DoctorAndUserLayout>
    <Header name="Larry Prinston" status="Patient" userAvatar={userAvatar} />
    <StyledMain>
      {children}
    </StyledMain>
  </DoctorAndUserLayout>
);

export default UserLayout;
