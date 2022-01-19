import { Controller } from 'react-hook-form';
import { useEffect } from 'react';
import { CustomSelect } from '../../select/Select.styled';
import useActions from '../../../../../hooks/useActions';

const SelectOccupation = (props: any) => {
  const { specializations, isLoadingForUser, getSpecializationsHandler } = useActions();
  const { control, name } = props;
  console.log('Occupation');

  useEffect(() => {
    getSpecializationsHandler();
  }, []);

  const onChange = (option: unknown, field: any) => {
    field.onChange((option as HTMLInputElement).value);
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
