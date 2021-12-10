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
import CreateResolution from './modals/CreateResolution';
import { PatientType } from '../../models/patient.model';
import EditResolution from './modals/EditResolution';

const Patient = ({
  id, name, status, time, description,
}: PatientType) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [createResolutionIsShown, setCreateResolutionIsShown] = useState(false);
  const [editResolutionIsShown, setEditResolutionIsShown] = useState(false);

  const onToggleList = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const onCreateResolution = () => {
    setCreateResolutionIsShown(true);
    setMenuIsOpen((prevState) => !prevState);
  };

  const onEditResolution = () => {
    setEditResolutionIsShown(true);
    setMenuIsOpen((prevState) => !prevState);
  };

  const onClose = () => {
    setCreateResolutionIsShown(false);
    setEditResolutionIsShown(false);
  };

  return (
    <>
      {createResolutionIsShown && <CreateResolution onClose={onClose} />}
      {editResolutionIsShown && <EditResolution onClose={onClose} />}
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
          {menuIsOpen && (
          <DropDownList
            onCreateResolution={onCreateResolution}
            onEditResolution={onEditResolution}
          />
          )}
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
