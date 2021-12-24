import { useLocation } from 'react-router-dom';

import { StyledArrow, StyledHeader, StyledText } from './header.styled';

type HeaderProps = {
  text: string,
};

const Header = ({ text }: HeaderProps) => {
  const location = useLocation();

  let paddingLeft;
  if (location.pathname === '/restore') {
    paddingLeft = '40px';
  }

  return (
    <StyledHeader paddingLeft={paddingLeft}>
      {location.pathname === '/restore' && <StyledArrow to="/sign-in" />}
      <StyledText>{text}</StyledText>
    </StyledHeader>
  );
};
export default Header;
