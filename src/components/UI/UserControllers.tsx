import React from 'react';
import routes from '../../routes/routes';
import { StyledBtn, StyledControllers } from './UserControllers.styled';

const activeStyles = {
  backgroundColor: '#7297FF',
  color: '#fff',
};

const UserControllers = () => (
  <StyledControllers>
    <StyledBtn to="/">Profile</StyledBtn>
    <StyledBtn
      to={routes.userAppointmentsPage}
      activeStyle={activeStyles}
    >
      Appointments
    </StyledBtn>
    <StyledBtn
      to={routes.userResolutions}
      activeStyle={activeStyles}
    >
      Resolutions
    </StyledBtn>
  </StyledControllers>
);

export default UserControllers;
