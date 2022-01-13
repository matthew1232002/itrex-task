import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { CustomSelect } from '../Form/Select.styled';
import { getAllSpecializations } from '../../../../store/user/patientOperations';
import { StyledErrorMessage } from '../CreateAppointmentFormik.styled';

interface ISelectValues {
  value: string;
  label: string;
}

interface ISelectProps {
  id: string;
}

const SelectOccupations = ({ id }: ISelectProps) => {
  const [, meta, { setValue }] = useField(id);
  const [allOccupations, setAllOccupations] = useState<Array<ISelectValues>>([]);

  useEffect(() => {
    getAllSpecializations().then((response) => setAllOccupations(response));
  }, []);

  const onChange = (option: unknown) => {
    setValue((option as HTMLInputElement).value);
  };

  return (
    <>
      <CustomSelect
        options={allOccupations}
        placeholder="Select an occupation"
        classNamePrefix="Select"
        onChange={onChange}
      />
      {meta.error && <StyledErrorMessage>*Choose an occupation*</StyledErrorMessage>}

    </>
  );
};

export default SelectOccupations;
