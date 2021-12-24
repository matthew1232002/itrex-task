import React, { useEffect } from 'react';
import {
  StyledAppointmentsList,
  StyledIcon,
  StyledSearch,
  StyledSearchForm, StyledSearchHeader, StyledSearchItems, StyledSearchList,
  StyledTitle,
} from './UserAppointmets.styled';
import Appointment from './Appointment';
import UserControllers from '../../UI/UserControllers';
import useActions from '../../../hooks/useActions';
import LoadingSpinner from '../../UI/LoadingSpinner';
import EmptyList from '../../doctor/patients/EmptyList';
import Button from '../../UI/Button';
import routes from '../../../routes/routes';
import Plus from '../../../assets/plus.svg';

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
          <Button text="Create an appointment" padding="12px 16px 12px 48px" to={routes.createAppointmentPage} itemPath={routes.userAppointmentsPage} img={Plus} invisible="none" />
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
