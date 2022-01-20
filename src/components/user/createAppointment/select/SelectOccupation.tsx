import { Control, Controller, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { CustomSelect } from './Select.styled';
import useActions from '../../../../hooks/useActions';

interface ISelectProps {
  control: Control;
  name: string;
}

const SelectOccupation = ({ control, name }: ISelectProps) => {
  const { specializations, isLoadingForUser, getSpecializationsHandler } = useActions();
  const { resetField } = useFormContext();

  useEffect(() => {
    getSpecializationsHandler();
  }, []);

  const onChange = (option: unknown, field: any) => {
    field.onChange((option as HTMLInputElement).value);
    resetField('doctor');
    resetField('time');
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <CustomSelect
          options={specializations}
          isLoading={isLoadingForUser}
          placeholder="Select an occupation"
          classNamePrefix="Select"
          onChange={(option) => onChange(option, field)}
        />
      )}
    />

  );
};

export default SelectOccupation;
