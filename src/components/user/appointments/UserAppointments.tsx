import React, { useEffect, useState } from 'react';
import {
  StyledAppointmentsList,
  StyledBtn,
  StyledControllers, StyledCreateAppointment, StyledIcon,
  StyledSearch,
  StyledSearchForm, StyledSearchHeader, StyledSearchItems, StyledSearchList,
  StyledTitle,
} from './UserAppointmets.styled';
import { getAppointments } from '../../../store/user/patientOperations';
import Appointment from './Appointment';
import { AppointmentFullInfo } from '../../models/appointment.model';

const UserAppointments = () => {
  const [appointments, setAppointments] = useState<Array<AppointmentFullInfo>>([]);
  useEffect(() => {
    getAppointments().then((response) => setAppointments(response.data.appointments));
  }, []);
  return (
    <>
      <StyledControllers>
        <StyledBtn to="/">Profile</StyledBtn>
        <StyledBtn to="/">Appointments</StyledBtn>
        <StyledBtn to="/">Resolutions</StyledBtn>
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
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            id={appointment.id}
            visitDate={appointment.visit_date}
            reason={appointment.reason}
            note={appointment.note}
            doctor={appointment.doctor}
          />
        ))}
      </StyledAppointmentsList>
    </>
  );
};
export default UserAppointments;
