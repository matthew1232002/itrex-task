import { useEffect, useState } from 'react';

import { StyledPatientsList } from './DoctorPatients.styled';
import EmptyList from './EmptyList';
import Patient from './Patient';
import { IPatient } from '../../models/patient.model';
import { getPatients } from '../../../store/doctor/doctorOperations';

const DoctorPatients = () => {
  const [patients, setPatients] = useState<Array<IPatient>>([]);
  useEffect(() => {
    getPatients().then((response) => setPatients(response));
  }, []);
  return (
    <StyledPatientsList>
      {patients.length === 0 && <EmptyList />}
      {patients && patients.map((patient) => (
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
