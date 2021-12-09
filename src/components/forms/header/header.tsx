import { useLocation } from 'react-router-dom';

import { StyledArrow, StyledHeader, StyledText } from './header.styled';

type HeaderProps = {
  text: string,
};

const Header = ({ text }: HeaderProps) => {
  const location = useLocation();

  let margin: string = '172px 0 40px 0';
  let paddingLeft;
  if (location.pathname === '/sign-in') {
    margin = '270px 0 40px 0';
  }
  if (location.pathname === '/restore') {
    margin = '267px 0 32px 0';
    paddingLeft = '40px';
  }

  return (
    <StyledHeader margin={margin} paddingLeft={paddingLeft}>
      {location.pathname === '/restore' && <StyledArrow to="/sign-in" />}
      <StyledText>{text}</StyledText>
    </StyledHeader>
  );
};
export default Header;
