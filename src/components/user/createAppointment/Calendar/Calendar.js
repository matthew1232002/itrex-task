import { useEffect, useState } from 'react';
import moment from 'moment';
import { StyledCalendar } from './Calendar.styled';

const ReactCalendar = (props) => {
  const [date, setDate] = useState(new Date());

  function generateData(d) {
    props.onChangeData(`${moment(d).format().slice(0, 11)}00:00:00.000Z`);
  }

  useEffect(() => {
    generateData(date);
  }, []);

  const onChange = (dateValue) => {
    setDate(dateValue);
    generateData(dateValue);
  };

  return (
    <div>
      <StyledCalendar
        locale="en"
        minDetail="year"
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default ReactCalendar;
