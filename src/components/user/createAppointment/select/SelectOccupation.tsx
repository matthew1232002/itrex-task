import { Control, Controller, useFormContext } from 'react-hook-form';
import { CustomSelect } from './Select.styled';
import { useFetchOccupations } from '../../../../hooks/queryHooks/useFetchOccupations';

interface ISelectProps {
  control: Control;
  name: string;
}

const SelectOccupation = ({ control, name }: ISelectProps) => {
  const { setValue } = useFormContext();
  const { data, isLoading } = useFetchOccupations();

  const onChange = (option: unknown) => {
    setValue('occupation', (option as HTMLInputElement).value);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <CustomSelect
          options={data}
          isLoading={isLoading}
          placeholder="Select an occupation"
          classNamePrefix="Select"
          onChange={onChange}
        />
      )}
    />

  );
};

export default SelectOccupation;
