import React from 'react';

import {StyledAside, StyledWrapper} from "./LoginLayout.styled";

const LoginLayout = (props) => {
    return (
        <StyledWrapper>
            <StyledAside>
                {props.children}
            </StyledAside>
        </StyledWrapper>
    );
};

export default LoginLayout;