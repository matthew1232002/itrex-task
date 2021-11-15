import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyledAppointmentsList,
  StyledBtn,
  StyledControllers, StyledCreateAppointment, StyledIcon,
  StyledSearch,
  StyledSearchForm, StyledSearchHeader, StyledSearchItems, StyledSearchList,
  StyledTitle,
} from './UserAppointmets.styled';
import Appointment from './Appointment';

const UserAppointments = () => {
  const appointments = useSelector((state) => state.userAppointments.items);
  return (
    <>
      <StyledControllers>
        <StyledBtn>Profile</StyledBtn>
        <StyledBtn>Appointments</StyledBtn>
        <StyledBtn>Resolutions</StyledBtn>
      </StyledControllers>
      <StyledTitle>
        <h2>My Appointments</h2>
        <StyledSearch>
          <StyledSearchForm>
            <StyledIcon />
            <p> Show:</p>
            <StyledSearchList>
              <StyledSearchHeader>
                <span>Upcoming</span>
              </StyledSearchHeader>
              <StyledSearchItems>
                <div className="search__item">Date</div>
                <div className="search__item">Name</div>
              </StyledSearchItems>
            </StyledSearchList>
          </StyledSearchForm>
          <StyledCreateAppointment to="/create-appointment">
            Create an appointment
          </StyledCreateAppointment>
        </StyledSearch>
      </StyledTitle>
      <StyledAppointmentsList>
        {appointments.map((item) => (
          <Appointment
            key={item.id}
            item={item}
          />
        ))}
      </StyledAppointmentsList>
    </>
  );
};

export default UserAppointments;
