import { Controller, useWatch } from 'react-hook-form';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { StyledCalendar } from '../../Calendar/Calendar.styled';

const Calendar = (props: any) => {
  // const methods = useFormContext();
  const [date, setDate] = useState(new Date());
  const { control, name } = props;
  const doctorValue = useWatch({ name: 'doctor' });

  console.log('Calendar');

  useEffect(() => {
    // methods.setValue('date', new Date());
  }, []);

  const onChange = (value: Date, field: any) => {
    setDate(value);
    field.onChange(`${moment(value).format('YYYY-MM-DD')}T00:00:00.000Z`);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <StyledCalendar
          onChange={(value: Date) => onChange(value, field)}
          value={date}
          tileDisabled={() => !doctorValue}
        />
      )}
    />
  );
};

export default Calendar;
