import React from 'react';
import routes from '../../routes/routes';
import { StyledBtn, StyledControllers } from './Controllers.styled';

const activeStyles = {
  backgroundColor: '#7297FF',
  color: '#fff',
};

const DoctorControllers = () => (
  <StyledControllers>
    <StyledBtn to={routes.doctorPatientsPage} activeStyle={activeStyles}>Patients</StyledBtn>
    <StyledBtn
      to="/"
    >
      Resolutions
    </StyledBtn>
  </StyledControllers>
);

export default DoctorControllers;
