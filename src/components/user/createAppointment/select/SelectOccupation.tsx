import { Control, Controller, useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { CustomSelect } from './Select.styled';
import { getAllSpecializations } from '../../../../store/user/patientOperations';

interface ISelectProps {
  control: Control;
  name: string;
}

const SelectOccupation = ({ control, name }: ISelectProps) => {
  const [allOccupations, setAllOccupations] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setValue } = useFormContext();

  useEffect(() => {
    setIsLoading(true);
    getAllSpecializations()
      .then((response) => {
        setAllOccupations(response);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const onChange = (option: unknown) => {
    setValue('occupation', (option as HTMLInputElement).value);
    setValue('doctor', '');
    setValue('time', '');
  };
  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <CustomSelect
          options={allOccupations}
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
