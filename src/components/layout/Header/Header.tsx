import {
  StyledHeader,
  StyledLogo,
  StyledUser,
  StyledUserData,
  StyledUserImg,
  StyledUserProfession,
} from './Header.styled';
import logo from '../../../assets/logo.png';

type HeaderProps = {
  name: string
  status: string
  userAvatar: string
};

const Header = ({ name, status, userAvatar }: HeaderProps) => (
  <StyledHeader>
    <StyledLogo>
      <div><img src={logo} alt="logo" /></div>
      <span>PALM CLINIC</span>
    </StyledLogo>
    <StyledUser>
      <StyledUserData>
        <p>{name}</p>
        <StyledUserProfession>{status}</StyledUserProfession>
      </StyledUserData>
      <StyledUserImg>
        <img src={userAvatar} alt="logo" />
      </StyledUserImg>
    </StyledUser>
  </StyledHeader>
);
export default Header;