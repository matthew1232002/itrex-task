import { useTable } from 'react-table';
import { useEffect, useMemo } from 'react';
import moment from 'moment';
import Title from './Title';
import UserControllers from '../../UI/UserControllers';
import { resolutionTableColumns } from './table/tableSchema';
import {
  ResolutionTable, ResolutionTableCell,
  ResolutionTableHead,
  ResolutionTableHeaderColumn,
  ResolutionTableHeadRow, ResolutionTableRow, StyledArrow, StyledMore, StyledWrapperTable,
} from './table/Table.styled';
import useActions from '../../../hooks/useActions';
import Arrow from '../../../assets/arrow-down.svg';
import LoadingSpinner from '../../UI/LoadingSpinner';

const Resolutions = () => {
  const { getResolutionsPatientHandler, resolutionsPatient, isLoadingForUser } = useActions();
  useEffect(() => {
    getResolutionsPatientHandler();
  }, [getResolutionsPatientHandler]);
  const columns = useMemo(() => resolutionTableColumns, []);
  const data = resolutionsPatient.map((resolution) => (
    {
      col1: resolution.doctor.first_name,
      col2: resolution.doctor.last_name,
      col3: resolution.resolution,
      col4: moment(resolution.visit_date).format('l'),
      col5: moment(resolution.next_appointment_date).format('l'),
      col6: <StyledMore />,
    }
  ));
  const {
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable<any>({ columns, data });
  return (
    <>
      <UserControllers />
      <Title />
      {isLoadingForUser && <LoadingSpinner />}
      {!isLoadingForUser && resolutionsPatient && (
        <StyledWrapperTable>
          <ResolutionTable>
            <ResolutionTableHead>
              {headerGroups.map((headerGroup) => (
                <ResolutionTableHeadRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <ResolutionTableHeaderColumn
                      {...column.getHeaderProps()}
                    >
                      {column.render('Header')}
                      <StyledArrow src={Arrow} />
                    </ResolutionTableHeaderColumn>
                  ))}
                </ResolutionTableHeadRow>
              ))}
            </ResolutionTableHead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <ResolutionTableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <ResolutionTableCell
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </ResolutionTableCell>
                    ))}
                  </ResolutionTableRow>
                );
              })}
            </tbody>
          </ResolutionTable>
        </StyledWrapperTable>
      )}

    </>
  );
};

export default Resolutions;
