import styled from 'styled-components';

export const StyledLabel = styled.label`
  line-height: 40px;
`;

export const StyledInput = styled.input`
  display: none;
  &:checked + span {
    color: #7297FF;
    border: 1px solid #7297FF;
  }
`;

export const StyledSpan = styled.span`
  display: inline-block;
  position: relative;
  border-radius: 8px;
  margin: 0 16px 16px 0;
  background-color: #ffffff;
  cursor: pointer;
  width: 100px;
  height: 40px;

  font-weight: 600;
  text-align: center;
  vertical-align: middle;
`;
