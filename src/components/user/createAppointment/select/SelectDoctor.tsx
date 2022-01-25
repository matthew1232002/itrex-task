import {
  Control, Controller, useFormContext, useWatch,
} from 'react-hook-form';
import { useEffect, useState } from 'react';
import { CustomSelect } from './Select.styled';
import { getDoctorsBySpecializations } from '../../../../store/user/patientOperations';

interface ISelectProps {
  control: Control;
  name: string;
}

const SelectDoctor = ({ control, name }: ISelectProps) => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [val, setVal] = useState<any>(undefined);
  const { setValue } = useFormContext();
  const occupationField = useWatch({ name: 'occupation' });

  useEffect(() => {
    if (occupationField) {
      setVal(null);
      setIsLoading(true);
      getDoctorsBySpecializations(occupationField)
        .then((response) => {
          setDoctors(response);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [occupationField]);

  const onChange = (option: unknown) => {
    setValue('doctor', (option as HTMLInputElement).value);
    setVal(option);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <CustomSelect
          options={doctors}
          value={val}
          isLoading={isLoading}
          isDisabled={!occupationField}
          placeholder="Select a doctor’s name"
          classNamePrefix="Select"
          onChange={onChange}
        />
      )}
    />

  );
};

export default SelectDoctor;
