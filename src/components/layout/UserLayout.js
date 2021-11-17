import React from 'react';

import {
  StyledHeader,
  StyledLogo,
  StyledMain,
  StyledUser,
  StyledUserData,
  StyledUserImg,
  StyledUserProfession,
} from './UserLayout.styled';
import logo from '../../assets/logo.png';
import userAvatar from '../../assets/UserPageAvatar.png';
import DoctorAndUserLayout from './DoctorAndUserLayout';

const UserLayout = ({ children }) => (
  <DoctorAndUserLayout>
    <StyledHeader>
      <StyledLogo>
        <div><img src={logo} alt="logo" /></div>
        <span>PALM CLINIC</span>
      </StyledLogo>
      <StyledUser>
        <StyledUserData>
          <p>Larry Prinston</p>
          <StyledUserProfession>Patient</StyledUserProfession>
        </StyledUserData>
        <StyledUserImg>
          <img src={userAvatar} alt="logo" />
        </StyledUserImg>
      </StyledUser>
    </StyledHeader>
    <StyledMain>
      {children}
    </StyledMain>
  </DoctorAndUserLayout>
);

export default UserLayout;
