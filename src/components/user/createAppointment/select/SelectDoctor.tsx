import {
  Control, Controller, useFormContext, useWatch,
} from 'react-hook-form';
import { useEffect, useState } from 'react';
import { CustomSelect } from './Select.styled';
import { useFetchDoctors } from '../../../../hooks/queryHooks/useFetchDoctors';

interface ISelectProps {
  control: Control;
  name: string;
}

const SelectDoctor = ({ control, name }: ISelectProps) => {
  const [val, setVal] = useState<any>(undefined);
  const { setValue } = useFormContext();
  const occupationField = useWatch({ name: 'occupation' });
  const { data, isFetching, refetch } = useFetchDoctors(occupationField);

  useEffect(() => {
    refetch();
    setValue('doctor', '');
    setVal(null);
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
          options={data}
          value={val}
          isLoading={isFetching}
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
