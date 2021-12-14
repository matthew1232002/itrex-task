import styled from 'styled-components';

import Cursor from '../../../assets/cursor.svg';

export const StyledWrapper = styled.div`
  position: absolute;
  top: calc(100% - 24px);
  right: 0;
  width: 100%;
  max-width: 272px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  padding: 4px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 40px rgba(118, 136, 187, 0.16));
`;

export const StyledList = styled.ul`
`;

export const StyledItem = styled.li`
  border-radius: 6px;
  padding: 9px 20px;
  cursor: url(${Cursor}), auto;
  &:last-child{
    color: #FF2567;
  }
  &:hover{
    background-color: #F9FAFF;
  }
`;
