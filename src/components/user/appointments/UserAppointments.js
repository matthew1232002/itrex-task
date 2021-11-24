import { useEffect, useState } from 'react';
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

const UserAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    getAppointments(0, 100).then((response) => setAppointments(response.data.appointments));
  }, []);
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
            visitDate={item.visit_date}
            reason={item.reason}
            note={item.note}
            status={item.status}
            doctor={item.doctor}
          />
        ))}
      </StyledAppointmentsList>
    </>
  );
};
export default UserAppointments;
