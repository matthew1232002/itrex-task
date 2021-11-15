import React from 'react';

import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledMain,
  StyledUser,
  StyledUserData,
  StyledUserImg,
  StyledUserProfession, StyledWrapper,
} from './UserLayout.styled';
import logo from '../../assets/logo.png';
import userAvatar from '../../assets/UserPageAvatar.png';

const UserLayout = ({ children }) => (
  <StyledWrapper>
    <StyledContainer>
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
    </StyledContainer>
  </StyledWrapper>
);

export default UserLayout;
