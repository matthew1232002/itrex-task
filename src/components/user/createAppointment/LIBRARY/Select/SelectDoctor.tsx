import { Controller, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { CustomSelect } from '../../select/Select.styled';
import useActions from '../../../../../hooks/useActions';

const SelectDoctor = (props: any) => {
  const { doctors, fetchingDoctors, getDoctorsHandler } = useActions();
  const { control, name } = props;
  const occupationField = useWatch({ name: 'occupation' });
  console.log('Doctor');

  useEffect(() => {
    if (occupationField) {
      getDoctorsHandler(occupationField);
    }
  }, [occupationField]);

  const onChange = (option: unknown, field: any) => {
    field.onChange((option as HTMLInputElement).value);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <CustomSelect
          options={doctors}
          isLoading={fetchingDoctors}
          isDisabled={!occupationField}
          placeholder="Select a doctor"
          classNamePrefix="Select"
          onChange={(option) => onChange(option, field)}
        />
      )}
    />

  );
};

export default SelectDoctor;
