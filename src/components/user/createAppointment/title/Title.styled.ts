import styled from 'styled-components';

export const StyledTitle = styled.div<{ last: boolean }>`
  font-size: 17px;
  color: #A1ABC9;
  display: flex;
  line-height: 29px;
  margin: ${(props) => (props.last ? '0 0 56px 0' : '0 0 40px 0')};
`;

export const StyledNumber = styled.p`
  width: 32px;
  height: 32px;
  border: 1px solid #A1ABC9;
  border-radius: 50%;
  text-align: center;
  margin-right: 16px;
`;
