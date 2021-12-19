import React, { useEffect } from 'react';
import {
  StyledAppointmentsList,
  StyledCreateAppointment, StyledIcon,
  StyledSearch,
  StyledSearchForm, StyledSearchHeader, StyledSearchItems, StyledSearchList,
  StyledTitle,
} from './UserAppointmets.styled';
import Appointment from './Appointment';
import UserControllers from '../../UI/UserControllers';
import useActions from '../../../hooks/useActions';
import LoadingSpinner from '../../UI/LoadingSpinner';
import EmptyList from '../../doctor/patients/EmptyList';

const UserAppointments = () => {
  const {
    getAppointmentsHandler, appointments, isLoadingForUser,
  } = useActions();
  useEffect(() => {
    getAppointmentsHandler();
  }, []);
  return (
    <>
      <UserControllers />
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
        {isLoadingForUser && <LoadingSpinner />}
        {appointments.length === 0 && !isLoadingForUser && <EmptyList />}
        {appointments && !isLoadingForUser && appointments.map((appointment) => (
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
