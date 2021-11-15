import React from 'react';
import { StyledFooter, StyledLink, StyledText } from './footer.styled';

const Footer = ({ text, path, link }) => (
  <StyledFooter>
    <StyledText>{text}</StyledText>
    <StyledLink to={path}>{link}</StyledLink>
  </StyledFooter>
);

export default Footer;
