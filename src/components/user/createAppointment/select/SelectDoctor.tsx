import { Control, Controller, useWatch } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { CustomSelect } from './Select.styled';
import useActions from '../../../../hooks/useActions';

interface ISelectProps {
  control: Control;
  name: string;
}

const SelectDoctor = ({ control, name }: ISelectProps) => {
  const { doctors, fetchingDoctors, getDoctorsHandler } = useActions();
  const [val, setVal] = useState<any>(undefined);
  const occupationField = useWatch({ name: 'occupation' });

  useEffect(() => {
    if (occupationField) {
      setVal(null);
      getDoctorsHandler(occupationField);
    }
  }, [occupationField]);

  const onChange = (option: unknown, field: any) => {
    field.onChange((option as HTMLInputElement).value);
    setVal(option);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <CustomSelect
          options={doctors}
          value={val}
          isLoading={fetchingDoctors}
          isDisabled={!occupationField}
          placeholder="Select a doctor’s name"
          classNamePrefix="Select"
          onChange={(option) => onChange(option, field)}
        />
      )}
    />

  );
};

export default SelectDoctor;
