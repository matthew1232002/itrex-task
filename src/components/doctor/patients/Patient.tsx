import { useState } from 'react';
import {
  StyledAvatar, StyledDescription,
  StyledFooter,
  StyledHeader,
  StyledInfo, StyledMore,
  StyledName,
  StyledPatient,
  StyledStatus, StyledTime,
} from './Patient.styled';
import PatientAvatar from '../../../assets/patient-img.jpg';
import PatientMore from '../../../assets/patient-more.svg';
import DropDownList from './DropDownList';
import CreateResolution from './CreateResolution';
import { PatientType } from '../../models/patient.model';

const Patient = ({
  id, name, status, time, description,
}: PatientType) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [createResolutionIsShown, setCreateResolutionIsShown] = useState(false);

  const onToggleList = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const onCreateResolution = () => {
    setCreateResolutionIsShown(true);
  };

  const onCloseCreate = () => {
    setCreateResolutionIsShown(false);
  };

  return (
    <>
      {createResolutionIsShown && <CreateResolution onCloseCreate={onCloseCreate} />}
      <StyledPatient key={id}>
        <StyledHeader>
          <StyledInfo>
            <StyledAvatar><img alt="avatar" src={PatientAvatar} /></StyledAvatar>
            <StyledName>
              <p>{name}</p>
              <StyledStatus>{status}</StyledStatus>
            </StyledName>
          </StyledInfo>
          <StyledMore onClick={onToggleList}>
            <img alt="more" src={PatientMore} />
          </StyledMore>
          {menuIsOpen && <DropDownList onCreateResolution={onCreateResolution} />}
        </StyledHeader>
        <StyledFooter>
          <StyledTime>{time}</StyledTime>
          <StyledDescription>{description}</StyledDescription>
        </StyledFooter>
      </StyledPatient>
    </>
  );
};

export default Patient;
