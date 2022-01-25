import {
  Control,
  Controller, useFormContext, useWatch,
} from 'react-hook-form';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { StyledCalendar } from './Calendar.styled';

interface ICalendarProps {
  control: Control;
  name: string;
}

const Calendar = ({ control, name }: ICalendarProps) => {
  const { setValue } = useFormContext();
  const [date, setDate] = useState(new Date());
  const doctorValue = useWatch({ name: 'doctor' });

  useEffect(() => {
    setValue('date', `${moment(new Date()).format('YYYY-MM-DD')}T00:00:00.000Z`);
  }, []);

  const onChange = (value: Date) => {
    setDate(value);
    setValue('date', `${moment(value).format('YYYY-MM-DD')}T00:00:00.000Z`);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <StyledCalendar
          locale="en"
          minDetail="year"
          onChange={onChange}
          value={date}
          tileDisabled={() => !doctorValue}
        />
      )}
    />
  );
};

export default Calendar;
