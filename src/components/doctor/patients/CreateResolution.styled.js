import styled from 'styled-components';
import User from '../../../assets/user.svg';

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

export const StyledBtn = styled.button`
  margin: 1.5rem 2rem;
`;
