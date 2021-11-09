import styled from "styled-components";
import Email from "../../assets/email.svg";
import Arrow from "../../assets/arrow-right.svg";

export const StyledText = styled.p`
  font-size: 15px;
  line-height: 19px;
  color:#A1ABC9;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: auto;
  }
`;

export const StyledEmail = styled.span`
  color: #7297FF;
  text-decoration: underline;
`;

export const StyledInputs = styled.div`
  div{
    position: relative;
    padding: 0;
    margin: 0 0 64px 0;
    &:nth-child(1) input{
      background: url(${Email}) no-repeat;
      background-position-y: center;
      background-position-x: 18px;
    }

    @media (max-width: 600px) {
      margin: 0 0 32px 0;
    }
  }
`;

export const StyledButton = styled.button`
  height: 56px;
  width: 213px;
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
    width: 198px;
    padding: 0 32px 0 0;
    :after{
      right: 19px;
    }
  }
`;