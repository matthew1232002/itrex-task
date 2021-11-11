import styled from "styled-components";
import {Link} from "react-router-dom";
import Arrow from '../../../assets/arrow-left.svg'

export const StyledHeader = styled.header`
  position: relative;
  margin: ${props => props.margin};
  padding-left: ${props => props.paddingLeft};

  @media (max-width: 600px) {
    margin: 38px 0 24px 0;
  }
`;

export const StyledText = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;

  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const StyledArrow = styled(Link)`
  width: 21px;
  height: 21px;
  position: absolute;
  left: 0;
  background-image: url(${Arrow});
`;