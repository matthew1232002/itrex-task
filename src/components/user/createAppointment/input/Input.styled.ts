import styled from 'styled-components';

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
