import React, { useEffect, useState } from 'react';
import { CustomSelect } from '../select/Select.styled';
import { StyledInput, StyledInputContainer, StyledLabel } from './FormPatient.styled';
import { getAllSpecializations, getDoctorsBySpecializations } from '../../../../store/user/patientOperations';

type EntryObject = {
  doctorId: string,
  reason?: string,
  note?: string,
};

type FormPatientProps = {
  onChangeFormData: (obj: EntryObject) => void
};

const FormPatient = ({ onChangeFormData }: FormPatientProps) => {
  const [allOccupations, setAllOccupations] = useState([]);
  const [namesBySpecialization, setNamesBySpecialization] = useState([]);
  const [doctorId, setDoctorId] = useState('');
  const [reason, setReason] = useState<string>();
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    getAllSpecializations().then((response) => setAllOccupations(response));
    const obj: EntryObject = {
      doctorId,
      reason,
      note,
    };
    onChangeFormData(obj);
  }, [doctorId, reason, note]);

  const onChangeOccupation = (option: unknown) => {
    getDoctorsBySpecializations((option as HTMLInputElement).value)
      .then((response) => setNamesBySpecialization(response));
  };

  const onChangeName = (option: unknown) => {
    setDoctorId((option as HTMLInputElement).value);
  };

  const onReasonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 4) {
      setReason(e.target.value);
    }
  };
  const onNoteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  return (
    <>
      <StyledInputContainer>
        <StyledLabel>Occupation</StyledLabel>
        <CustomSelect
          options={allOccupations}
          placeholder="Select an occupation"
          classNamePrefix="Select"
          onChange={onChangeOccupation}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Doctor’s Name</StyledLabel>
        <CustomSelect
          options={namesBySpecialization}
          placeholder="Select a doctor’s name"
          classNamePrefix="Select"
          onChange={onChangeName}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Reason for the visit</StyledLabel>
        <StyledInput placeholder="Leave a reason" onChange={onReasonHandler} data-testid="reason" />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Note</StyledLabel>
        <StyledInput placeholder="Leave a note if needed" onChange={onNoteHandler} data-testid="note" />
      </StyledInputContainer>
    </>
  );
};

export default FormPatient;
