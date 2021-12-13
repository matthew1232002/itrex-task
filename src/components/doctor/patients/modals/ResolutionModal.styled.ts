import styled, { css } from 'styled-components';
import User from '../../../../assets/user.svg';
import Create from '../../../../assets/patient-description.svg';
import Edit from '../../../../assets/check-edit-resolution.svg';

export const StyledWrapper = styled.div`
  padding: 2rem;
`;

export const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const StyledName = styled.p`
  font-size: 15px;
  font-weight: 600;
  padding-left: 40px;
  background: url(${User}) no-repeat;
  background-position-x: left;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const StyledText = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  margin-bottom: 16px;
  color: #A1ABC9;
`;

export const StyledArea = styled.textarea`
  resize: none;
  border: 1px solid #DCE0EC;
  border-radius: 8px;
  width: 100%;
  height: 160px;
  padding: 16px 24px;
  &:focus-visible{
    outline: none;
  }
  &::-webkit-scrollbar{
    width: 12px;
    height: auto;
    background-color: rgba(220, 224, 236, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: rgba(220, 224, 236, 0.5);
    border-radius: 8px;
  }
`;

export const StyledControllers = styled.div`
  background: #F9FAFF;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 16px 16px;
  border-top: 1px solid #DCE0EC;
`;

export const StyledBtn = styled.button<{ cancel?: boolean, edit?: boolean }>`
  margin: 1.5rem 2rem;
  background-color: ${(props) => (props.cancel ? '#fff' : '#7297FF')};
  border: 1px solid #DCE0EC;
  color: ${(props) => (props.cancel ? '#A1ABC9' : '#fff')};
  border-radius: 8px;
  position: relative;
  padding: 14px 16px 13px 48px;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 16px;
  ${(props) => (!props.cancel
    ? css`background-image: url(${Create});` : null)
};
  ${(props) => (!props.cancel && props.edit
    ? css`background-image: url(${Edit});` : null)
};
  &:before,
  &:after{
    position: absolute;
    left: 22px;
    ${(props) => (props.cancel
    ? css`content: "";` : css`content: none;`)
};
    height: 20px;
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
