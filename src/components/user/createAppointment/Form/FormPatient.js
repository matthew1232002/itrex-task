import React, { useEffect, useState } from 'react';
import { CustomSelect } from './Select.styled';
import { StyledInput, StyledInputContainer, StyledLabel } from './FormPatient.styled';

const FormPatient = ({ onChangeFormData }) => {
  const [occupationData, setOccupationData] = useState();
  const [doctorName, setDoctorName] = useState();
  const [reason, setReason] = useState();
  const [note, setNote] = useState();

  useEffect(() => {
    const obj = {
      occupation: occupationData,
      doctorName,
      reason,
      note,
    };
    onChangeFormData(obj);
  }, [occupationData, doctorName, reason, note]);

  const occupation = [
    { value: 'cardiologist', label: 'Cardiologist' },
    { value: 'dermatologist', label: 'Dermatologist' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'family Doctor', label: 'Family Doctor' },
    { value: 'gastroenterologist', label: 'Gastroenterologist' },
    { value: 'gynecologist', label: 'Gynecologist' },
    { value: 'surgeon', label: 'Surgeon' },
    { value: 'therapist', label: 'Therapist' },
  ];

  const names = [
    { value: 'john milton', label: 'John Milton' },
    { value: 'john charles', label: 'John Charles' },
    { value: 'jonathan meyers', label: 'Jonathan Meyers' },
    { value: 'andrew story', label: 'Andrew Story' },
    { value: 'vitalii doc', label: 'Vitalii Doc' },
  ];

  const onChangeOccupation = (value) => {
    setOccupationData(value.value);
  };

  const onChangeName = (value) => {
    setDoctorName(value.value);
  };

  const onReasonHandler = (e) => {
    setReason(e.target.value);
  };
  const onNoteHandler = (e) => {
    setNote(e.target.value);
  };

  return (
    <>
      <StyledInputContainer>
        <StyledLabel>Occupation</StyledLabel>
        <CustomSelect
          options={occupation}
          placeholder="Select an occupation"
          classNamePrefix="Select"
          onChange={onChangeOccupation}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Doctor’s Name</StyledLabel>
        <CustomSelect
          options={names}
          placeholder="Select a doctor’s name"
          classNamePrefix="Select"
          onChange={onChangeName}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Reason for the visit</StyledLabel>
        <StyledInput placeholder="Leave a reason" onChange={onReasonHandler} />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Note</StyledLabel>
        <StyledInput placeholder="Leave a note if needed" onChange={onNoteHandler} />
      </StyledInputContainer>
    </>
  );
};

export default FormPatient;
