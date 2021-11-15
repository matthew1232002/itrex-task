import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  margin-bottom: 64px;
  position: relative;
  &:last-of-type{
    margin-bottom: 80px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  line-height: 17px;
  position: absolute;
  top: -25px;
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #DCE0EC;
  border-radius: 8px;
  height: 56px;
  padding: 0 0 0 24px;
  transition: 100ms linear;
  cursor: pointer;

  &:hover {
    border-color: hsl(0, 0%, 70%);
  }

  &:focus {
    border-color: #7297FF;
  }
`;
