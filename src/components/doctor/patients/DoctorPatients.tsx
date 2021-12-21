import { useEffect } from 'react';

import { StyledPatientsList } from './DoctorPatients.styled';
import EmptyList from './EmptyList';
import Patient from './Patient';
import useActions from '../../../hooks/useActions';
import LoadingSpinner from '../../UI/LoadingSpinner';

const DoctorPatients = () => {
  const { getPatientsHandler, patientsList, loading } = useActions();
  useEffect(() => {
    getPatientsHandler();
  }, []);
  return (
    <StyledPatientsList>
      {loading && <LoadingSpinner />}
      {patientsList.length === 0 && !loading && <EmptyList />}
      {patientsList && !loading && patientsList.map((patient) => (
        <Patient
          key={patient.id}
          id={patient.id}
          reason={patient.reason}
          note={patient.note}
          visit_date={patient.visit_date}
          status={patient.status}
          patient={patient.patient}
        />
      ))}
    </StyledPatientsList>
  );
};

export default DoctorPatients;
