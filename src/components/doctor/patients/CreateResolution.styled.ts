import styled, { css } from 'styled-components';
import User from '../../../assets/user.svg';
import Img from '../../../assets/patient-description.svg';

export const StyledWrapper = styled.div`
  padding: 2rem;
`;

export const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const StyledName = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  padding-left: 40px;
  background: url(${User}) no-repeat;
  background-position-x: left;
`;

export const StyledText = styled.p`

`;

export const StyledArea = styled.textarea`
  resize: none;
  border: 1px solid #DCE0EC;
  border-radius: 8px;
  width: 100%;
  height: 160px;
`;

export const StyledControllers = styled.div`
  background: #F9FAFF;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
`;

export const StyledBtn = styled.button<{ cancel: boolean }>`
  margin: 1.5rem 2rem;
  background-color: ${(props) => (props.cancel ? '#fff' : '#7297FF')};
  border: 1px solid #DCE0EC;
  color: ${(props) => (props.cancel ? '#A1ABC9' : '#fff')};
  border-radius: 8px;
  position: relative;
  padding: 13px 16px 13px 35px;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  cursor: pointer;
  ${(props) => (props.cancel
    ? css`background: url(${Img}) no-repeat;` : css`background: none;`)
};
  &:before,
  &:after{
    position: absolute;
    left: 16px;
    ${(props) => (props.cancel
    ? css`content: "";` : css`content: none;`)
};
    height: 16px;
    width: 1px;
    border: 0.8px solid #A1ABC9;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    border-radius: 2px;
    background: #A1ABC9;
  }
  &:before {
    transform: translateY(-50%) rotate(45deg);
  }
  &:after {
    transform: translateY(-50%) rotate(-45deg);
  }
`;
