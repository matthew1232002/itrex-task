import styled from 'styled-components';

export const StyledList = styled.ol`
  display: flex;
`;

export const StyledLi = styled.li`
  padding: 0 40px 0 0;
  position: relative;
  
  &:after{
    display: block;
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    border:solid #A1ABC9;
    border-width: 0 2px 2px 0;
    padding: 3px;
  }
  &:last-of-type{
    padding: 0;
    &:after{
      display: none;
    }
  }
`;

export const StyledItem = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${(props) => (props.disabled ? '#A1ABC9' : '#7297FF')};
  cursor: pointer;
  padding: 0;
`;
