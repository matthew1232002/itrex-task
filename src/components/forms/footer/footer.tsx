import { StyledFooter, StyledLink, StyledText } from './footer.styled';

type FooterProps = {
  text: string,
  path: string,
  link: string,
};

const Footer = ({ text, path, link }: FooterProps) => (
  <StyledFooter>
    <StyledText>{text}</StyledText>
    <StyledLink to={path}>{link}</StyledLink>
  </StyledFooter>
);

export default Footer;
