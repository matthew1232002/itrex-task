import React from 'react';
import {StyledFooter, StyledLink, StyledText} from "./footer.styled";

const Footer = ({text, path, link}) => {
    return (
        <StyledFooter>
            {text && <StyledText>{text}</StyledText>}
            <StyledLink to={path}>{link}</StyledLink>
        </StyledFooter>
    );
};

export default Footer;