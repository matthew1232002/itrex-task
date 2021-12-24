import { StyledLink, StyledText } from './footer.styled';

type FooterProps = {
  text: string,
  path: string,
  link: string,
};

const Footer = ({ text, path, link }: FooterProps) => (
  <footer>
    <StyledText>{text}</StyledText>
    <StyledLink to={path}>{link}</StyledLink>
  </footer>
);

export default Footer;
