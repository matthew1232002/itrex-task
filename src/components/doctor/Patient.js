import React from 'react';

import {
  StyledAvatar, StyledDescription,
  StyledFooter,
  StyledHeader,
  StyledInfo,
  StyledName,
  StyledPatient,
  StyledStatus, StyledTime,
} from './Patient.styled';
import PatientAvatar from '../../assets/patient-img.jpg';
import PatientMore from '../../assets/patient-more.svg';

const Patient = ({
  id, name, status, date, description,
}) => (
  <StyledPatient key={id}>
    <StyledHeader>
      <StyledInfo>
        <StyledAvatar><img alt="avatar" src={PatientAvatar} /></StyledAvatar>
        <StyledName>
          <p>{name}</p>
          <StyledStatus>{status}</StyledStatus>
        </StyledName>
      </StyledInfo>
      <div>
        <img alt="more" src={PatientMore} />
      </div>
    </StyledHeader>
    <StyledFooter>
      <StyledTime>{date}</StyledTime>
      <StyledDescription>{description}</StyledDescription>
    </StyledFooter>
  </StyledPatient>
);

export default Patient;
