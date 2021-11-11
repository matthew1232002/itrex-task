import styled from "styled-components";
import EyeFlash from '../../../assets/eye-flash.svg';

export const StyledWrapper = styled.div`
  p {
    font-size: 13px;
    line-height: 16px;
    color: #F6657F;
    position: absolute;
    bottom: -23px;
    
  }
`;

export const StyledInput = styled.input`
  height: 56px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #DCE0EC;
  position: relative;
  padding: 16px 63px;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.16);
  &:focus{
    outline: none;
    border: 1px solid #7297FF;
  }
  &::placeholder{
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
  }

  @media (max-width: 600px) {
    height: 40px;
    width: 100%;
    padding: 9px 47px;
    &::placeholder{
      font-size: 15px;
      line-height: 21px;
    }
  }
`;

export const StyledEye = styled.svg`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  background: url(${EyeFlash}) no-repeat;
  cursor: pointer;
`;