import React from 'react';
import {
  StyledAvatar, StyledDescription, StyledDoctorPosition,
  StyledFooter,
  StyledHeader,
  StyledInfo,
  StyledName, StyledPatient,
  StyledTime,
} from './Appointment.styled';
import DocAvatar from '../../../assets/DocAvatar.png';
import More from '../../../assets/patient-more.svg';

const Appointment = ({
  item: {
    calendarData,
    time,
    occupation,
    doctorName,
    reason,
    note,
  },
}) => (
  <StyledPatient>
    <StyledHeader>
      <StyledInfo>
        <StyledAvatar><img alt="avatar" src={DocAvatar} /></StyledAvatar>
        <StyledName>
          <p>{doctorName}</p>
          <StyledDoctorPosition>{`${occupation} ${note}`}</StyledDoctorPosition>
        </StyledName>
      </StyledInfo>
      <div>
        <img alt="more" src={More} />
      </div>
    </StyledHeader>
    <StyledFooter>
      <StyledTime>{`${calendarData} ${time}`}</StyledTime>
      <StyledDescription>{reason}</StyledDescription>
    </StyledFooter>
  </StyledPatient>
);

export default Appointment;
