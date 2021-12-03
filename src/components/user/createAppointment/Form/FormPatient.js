import { useEffect, useState } from 'react';
import { CustomSelect } from './Select.styled';
import { StyledInput, StyledInputContainer, StyledLabel } from './FormPatient.styled';
import { getAllSpecializations, getDoctorsBySpecializations } from '../../../../store/user/patientOperations';

const FormPatient = ({ onChangeFormData }) => {
  const [allOccupations, setAllOccupations] = useState([]);
  const [namesBySpecialization, setNamesBySpecialization] = useState([]);
  const [doctorId, setDoctorId] = useState();
  const [reason, setReason] = useState();
  const [note, setNote] = useState('');

  useEffect(() => {
    getAllSpecializations().then((response) => setAllOccupations(response));
    const obj = {
      doctorId,
      reason,
      note,
    };
    onChangeFormData(obj);
  }, [doctorId, reason, note]);

  const onChangeOccupation = (value) => {
    getDoctorsBySpecializations(value.value).then((response) => setNamesBySpecialization(response));
  };

  const onChangeName = (value) => {
    setDoctorId(value.value);
  };

  const onReasonHandler = (e) => {
    if (e.target.value.length >= 4) {
      setReason(e.target.value);
    }
  };
  const onNoteHandler = (e) => {
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
        <StyledInput placeholder="Leave a reason" onChange={onReasonHandler} data-testid='reason'/>
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Note</StyledLabel>
        <StyledInput placeholder="Leave a note if needed" onChange={onNoteHandler} data-testid='note'/>
      </StyledInputContainer>
    </>
  );
};

export default FormPatient;
