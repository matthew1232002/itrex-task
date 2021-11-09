import styled from "styled-components";

import {Link} from "react-router-dom";

export const StyledFooter = styled.footer `
  padding: 0 0 80px 0;

  @media (max-width: 600px) {
    padding: 0 0 44px 0;
  }
`;

export const StyledText = styled.span `
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  color: #A1ABC9;
  padding: 0 12px 0 0;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: #7297FF;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  @media (max-width: 600px) {
    display: block;
  }
`;