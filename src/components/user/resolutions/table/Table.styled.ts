import styled from 'styled-components';
import More from '../../../../assets/patient-more.svg';

export const StyledWrapperTable = styled.div`
  height: calc(100vh - 320px);
  overflow: auto;
  &::-webkit-scrollbar{
    width: 12px;
    height: auto;
    background-color: rgba(220, 224, 236, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(220, 224, 236, 0.5);
    border-radius: 8px;
  }
`;

export const ResolutionTable = styled.table`
  color: #202225;
  width: 100%;
  border-spacing: 0 5px;
`;

export const ResolutionTableHead = styled.thead`
  color: #A1ABC9;
  font-size: 15px;
  line-height: 24px;
  background-color: #fff;
`;

export const ResolutionTableHeadRow = styled.tr`
`;

export const ResolutionTableHeaderColumn = styled.th`
  text-align: left;
  padding: 20px 40px;
`;

export const ResolutionTableRow = styled.tr`
  font-size: 17px;
  line-height: 24px;
  background-color: #fff;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
`;

export const ResolutionTableCell = styled.td`
  padding: 20px 40px;
  border-radius: 4px;
`;

export const StyledMore = styled.div`
  background: url(${More}) no-repeat;
  padding: 12px;
  background-position-x: 30px;
  cursor: pointer;
`;

export const StyledArrow = styled.img`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  padding-left: 12px;
`;
