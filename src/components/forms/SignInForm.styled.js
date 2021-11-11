import styled from "styled-components";
import Email from "../../assets/email.svg";
import Password from "../../assets/password.svg";
import Arrow from "../../assets/arrow-right.svg";
import {Link} from "react-router-dom";

export const StyledInputs = styled.div`
  div{
    position: relative;
    padding: 0;
    margin: 0 0 40px 0;
    &:nth-child(1) input{
      background: url(${Email}) no-repeat;
      background-position-y: center;
      background-position-x: 18px;
    }
    &:nth-child(2) input{
      background: url(${Password}) no-repeat;
      background-position-y: center;
      background-position-x: 18px;
    }
    
    &:last-child{
      position: relative;
      padding: 0;
      margin: 0 0 64px 0;
    }

    @media (max-width: 600px) {
      margin: 0 0 25px 0;
      &:last-child{
        margin: 0 0 82px 0;
      }
    }
  }
`;

export const StyledButton = styled.button`
  height: 56px;
  width: 146px;
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
    width: 122px;
    padding: 0 32px 0 0;
    :after{
      right: 19px;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  color: #7297FF;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  margin-top: 32px;
`;