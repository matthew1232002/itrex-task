import React from 'react';
import styled from "styled-components";
import Arrow from '../../../assets/arrow-right.svg'

const StyledButton = styled.button`
  height: 56px;
  width: ${props => props.width? props.width: '146px'};
  border-radius: 8px;
  background-color: #7297FF;
  color: #FFF;
  font-size: 17px;
  font-weight: 600;
  padding: 0 32px 0 0;
  border: none;
  position: relative;
  cursor: pointer;

  &:after{
    width: 21px;
    height: 21px;
    content: "";
    background-image: url(${Arrow});
    position: absolute;
    right: 26px;
  }

  @media (max-width: 600px) {
    font-size: 15px;
    height: 48px;
    width: ${props => props.mediaWidth? props.mediaWidth: '122px'};
    padding: 0 32px 0 0;
    :after{
      right: 19px;
    }
  }
`;

const Button = ({text, width, mediaWidth}) => {
    return (
        <StyledButton type='submit' width={width} mediaWidth={mediaWidth}>{text}</StyledButton>
    );
};

export default Button