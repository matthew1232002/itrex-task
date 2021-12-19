import { useState } from 'react';
import moment from 'moment';
import {
  StyledAvatar, StyledDescription,
  StyledFooter,
  StyledHeader,
  StyledInfo, StyledMore,
  StyledName,
  StyledPatient,
  StyledStatus, StyledTime,
} from './Patient.styled';
import PatientMore from '../../../assets/patient-more.svg';
import DropDownList from './DropDownList';
import CreateResolution from './modals/CreateResolution';
import { IPatient } from '../../models/patient.model';
import EditResolution from './modals/EditResolution';
import useActions from '../../../hooks/useActions';

const Patient = ({
  id, reason, note, visit_date, status, patient,
}: IPatient) => {
  const { deleteAppointmentHandler } = useActions();
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

  const onDeleteAppointment = (appointmentId: string) => {
    deleteAppointmentHandler(appointmentId);
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {createResolutionIsShown && (
      <CreateResolution
        text={reason}
        onClose={onClose}
        firstName={patient.first_name}
        lastName={patient.last_name}
        id={id}
      />
      )}
      {editResolutionIsShown && (
      <EditResolution
        text={reason}
        onClose={onClose}
        firstName={patient.first_name}
        lastName={patient.last_name}
      />
      )}
      <StyledPatient key={id}>
        <StyledHeader>
          <StyledInfo>
            <StyledAvatar><img alt="avatar" src={patient.photo} /></StyledAvatar>
            <StyledName>
              <p>
                {patient.first_name}
                {' '}
                {patient.last_name}
              </p>
              <StyledStatus status={status}>{status}</StyledStatus>
            </StyledName>
          </StyledInfo>
          <StyledMore onClick={onToggleList}>
            <img alt="more" src={PatientMore} />
          </StyledMore>
          {menuIsOpen && (
          <DropDownList
            onCreateResolution={onCreateResolution}
            onEditResolution={onEditResolution}
            onDelete={() => onDeleteAppointment(id)}
            id={id}
          />
          )}
        </StyledHeader>
        <StyledFooter>
          <StyledTime>
            {moment(visit_date).format('ddd MMM D, YYYY h:mm a')}
            {' - '}
            {moment(visit_date).add(1, 'hours').format('h:mm a')}
          </StyledTime>
          <StyledDescription>
            {reason}
            {note}
          </StyledDescription>
        </StyledFooter>
      </StyledPatient>
    </>
  );
};

export default Patient;
