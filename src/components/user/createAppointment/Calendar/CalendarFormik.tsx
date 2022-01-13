import { FormikValues, useField, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { StyledCalendar } from './Calendar.styled';

interface ICalendarProps {
  id: string,
}

const CalendarFormik = ({ id }: ICalendarProps) => {
  const [date, setDate] = useState(new Date());
  const [disabled, setDisabled] = useState(true);
  const [,,{ setValue }] = useField(id);
  const { values } = useFormikContext<FormikValues>();

  useEffect(() => {
    if (values.occupation && values.doctorName) {
      setDisabled(false);
    }
  }, [values.occupation, values.doctorName]);

  const onChange = (value: Date) => {
    setDate(value);
    setValue(`${moment(value).format('YYYY-MM-DD')}T00:00:00.000Z`);
  };

  useEffect(() => {
    onChange(date);
  }, []);

  return (
    <StyledCalendar
      locale="en"
      minDetail="year"
      onChange={onChange}
      value={date}
      tileDisabled={() => disabled}
    />
  );
};

export default CalendarFormik;
