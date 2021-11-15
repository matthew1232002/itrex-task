import React, { useEffect, useState } from 'react';
import { StyledCalendar } from './Calendar.styled';

const ReactCalendar = (props) => {
  const [date, setDate] = useState(new Date());

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function generateData(d) {
    props.onChangeData(`${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()},${d.getFullYear()}`);
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
        formatShortWeekday={(locale, d) => ['M', 'T', 'W', 'T', 'F', 'S', 'S'][d.getDate() - 1]}
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default ReactCalendar;
