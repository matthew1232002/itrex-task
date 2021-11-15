import React, { useEffect, useState } from 'react';

import { StyledPatientsList } from './DoctorPatients.styled';
import EmptyList from './EmptyList';
import patientsList from './patients.json';
import Patient from './Patient';

const DoctorPatients = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    setPatients(patientsList);
  }, []);
  return (
    <StyledPatientsList>
      {patients.length === 0 && <EmptyList />}
      {patients && patients.map((patient) => (
        <Patient
          key={patient.id}
          id={patient.id}
          name={patient.name}
          status={patient.status}
          date={patient.date}
          description={patient.description}
        />
      ))}
    </StyledPatientsList>
  );
};

export default DoctorPatients;
