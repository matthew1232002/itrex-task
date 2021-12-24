import {
  StyledHeader,
  StyledLogo,
  StyledUser,
  StyledUserData,
  StyledUserImg,
  StyledUserProfession,
} from './Header.styled';
import logo from '../../../assets/logo.png';
import useActions from '../../../hooks/useActions';

const Header = () => {
  const { profile } = useActions();
  return (
    <StyledHeader>
      <StyledLogo>
        <div><img src={logo} alt="logo" /></div>
        <span>PALM CLINIC</span>
      </StyledLogo>
      <StyledUser>
        <StyledUserData>
          <p>
            {profile.first_name}
            {' '}
            {profile.last_name}
          </p>
          <StyledUserProfession>{profile.role_name}</StyledUserProfession>
        </StyledUserData>
        <StyledUserImg>
          <img src={profile.photo} alt="logo" />
        </StyledUserImg>
      </StyledUser>
    </StyledHeader>
  );
};
export default Header;
