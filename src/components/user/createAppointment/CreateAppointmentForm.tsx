import { useForm, FormProvider } from 'react-hook-form';
import Calendar from './LIBRARY/Calendar/Calendar';
import SelectOccupation from './LIBRARY/Select/SelectOccupation';
import SelectDoctor from './LIBRARY/Select/SelectDoctor';
import Input from './LIBRARY/Input/Input';
import Checkboxes from './checkboxes/Checkboxes';

const CreateAppointmentForm = () => {
  const methods = useForm();
  const { handleSubmit, control, register } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Calendar control={control} name="date" />
        <Checkboxes />
        <SelectOccupation control={control} name="occupation" />
        <SelectDoctor control={control} name="doctor" />
        <Input placeholder="Leave a reason" {...register('reason')} />
        <Input placeholder="Leave a note if needed" {...register('note')} />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default CreateAppointmentForm;
